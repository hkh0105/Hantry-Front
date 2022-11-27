import { createAsyncThunk } from "@reduxjs/toolkit";

import { getProjectListApi, getProjectDetailsApi } from "../../api/project";

export const getProjectListAction = createAsyncThunk(
  "GET_PROJECT_LIST",
  async () => {
    const result = await getProjectListApi();
    const {
      data: { userProject },
    } = result;

    return userProject;
  },
);

export const getSelectedProjectAction = createAsyncThunk(
  "GET_SELECTED_PROJECT",
  async dsn => {
    const result = await getProjectDetailsApi(dsn);
    const {
      data: { projectDetails },
    } = result;

    return projectDetails;
  },
);
