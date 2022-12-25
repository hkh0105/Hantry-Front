import { createSlice } from "@reduxjs/toolkit";

import { ProfileTypes } from "../constants";
import {
  getAllErrorsAction,
  getFiteredErrorAction,
  getErrorDetailACtion,
} from "./thunkAction/errorAction";
import {
  getProjectListAction,
  getSelectedProjectAction,
} from "./thunkAction/projectAction";

const initialState = {
  projectList: [],
  selectedProject: {},
  errors: [],
  allErrors: [],
  selectedError: {},
  profile: {},
};

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
    [getProjectListAction.rejected]: (state, { payload }) => {
      return { ...state };
    },
    [getSelectedProjectAction.fulfilled]: (state, { payload }) => {
      const selectedProject = payload;
      const profile = {
        "first-input": [],
        "largest-contentful-paint": [],
        "layout-shift": [],
        longtask: [],
        navigation: [],
        paint: [],
      };

      if (!selectedProject?.performance) return;
      const profileList = selectedProject?.performance;

      for (let i = 0; i < profileList.length; i++) {
        const key = Object.keys(profileList[i])[0];
        if (ProfileTypes.includes(key)) {
          profile[key].push(profileList[i][key]);
        }
      }

      return { ...state, selectedProject, profile };
    },

    [getSelectedProjectAction.rejected]: (state, { payload }) => {
      return { ...state };
    },

    [getFiteredErrorAction.fulfilled]: (state, { payload }) => {
      const errors = payload;

      return { ...state, errors };
    },
    [getAllErrorsAction.fulfilled]: (state, { payload }) => {
      const allErrors = payload;

      return { ...state, allErrors };
    },
    [getErrorDetailACtion.fulfilled]: (state, { payload }) => {
      const selectedError = payload;

      return { ...state, selectedError };
    },
  },
});

export const { saveProject, deleteProject } = projectSlice.actions;
export default projectSlice.reducer;
