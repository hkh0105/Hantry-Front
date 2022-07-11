import { createSlice } from "@reduxjs/toolkit";

const initialState = { projects: null };

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    saveProject(state, action) {
      state.projects = action.payload;
    },
    deleteProject(state, action) {
      state.projects = null;
    },
  },
});

export const { saveProject, deleteProject } = projectSlice.actions;
export default projectSlice.reducer;
