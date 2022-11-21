import { createSlice } from "@reduxjs/toolkit";

import { getProjectListAction } from "./thunkAction/projectAction";

const initialState = { projectList: [] };

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    saveProject(state, action) {
      state.projectList = action.payload;
    },
    deleteProject(state, action) {
      state.projectList = null;
    },
  },
  extraReducers: {
    [getProjectListAction.fulfilled]: (state, { payload }) => {
      const projectList = payload;

      return { ...state, projectList };
    },
  },
});

export const { saveProject, deleteProject } = projectSlice.actions;
export default projectSlice.reducer;
