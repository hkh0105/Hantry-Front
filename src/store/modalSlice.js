import { createSlice } from "@reduxjs/toolkit";

const initialState = { uploadModalOn: false, createCorfirmModalOn: false };

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    onModal(state, action) {
      if (action.payload === "Upload") {
        state.uploadModalOn = !state.uploadModalOn;
      } else if (action.payload === "Create") {
        state.createCorfirmModalOn = !state.createCorfirmModalOn;
      } else {
        alert("??");
      }
    },
    offModal(state) {
      state.uploadModalOn = false;
      state.createCorfirmModalOn = false;
    },
  },
});

export const { onModal, offModal } = modalSlice.actions;
export default modalSlice.reducer;
