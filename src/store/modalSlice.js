import { createSlice } from "@reduxjs/toolkit";

const initialState = { uploadModalOn: false, createConfirmModalOn: false };

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    onModal(state, action) {
      if (action.payload === "Upload") {
        state.uploadModalOn = true;
      } else if (action.payload === "Create") {
        state.createConfirmModalOn = true;
      } else {
        alert("??");
      }
    },
    offModal(state) {
      state.uploadModalOn = false;
      state.createConfirmModalOn = false;
    },
  },
});

export const { onModal, offModal } = modalSlice.actions;
export default modalSlice.reducer;
