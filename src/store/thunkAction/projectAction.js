import { createAsyncThunk } from "@reduxjs/toolkit";

import { getProjectListApi } from "../../api/project";

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
