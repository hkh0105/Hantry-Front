import { createSlice } from "@reduxjs/toolkit";

const initialState = { projects: null };

const projectSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveProject(state, action) {
      state.projecs = action.payload;
    },
    deleteProject(state, action) {
      state.userInformation = null;
    },
  },
});

export const { saveProject, deleteProject } = projectSlice.actions;
export default projectSlice.reducer;
