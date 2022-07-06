import { createSlice } from "@reduxjs/toolkit";

const initialState = { userInformation: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUserInfo(state, action) {
      state.userInformation = action.payload;
    },
    deleteUserInfo(state) {
      state.userInformation = null;
    },
  },
});

export const { saveUserInfo, deleteUserInfo } = userSlice.actions;
export default userSlice.reducer;
