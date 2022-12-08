import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getFilteredErrorsApi,
  getAllErrorsApi,
  getErrorDetailApi,
} from "../../api/error";

export const getFiteredErrorAction = createAsyncThunk(
  "GET_FILTED_ERROR_LIST",
  async condition => {
    const { dsn, pageNum, filter, orderType } = condition;
    const result = await getFilteredErrorsApi(dsn, pageNum, filter, orderType);

    const {
      data: { errorList },
    } = result;

    return errorList;
  },
);

export const getAllErrorsAction = createAsyncThunk(
  "GET_ALL_ERROR_LIST",
  async dsn => {
    const result = await getAllErrorsApi(dsn);
    const {
      data: { allErrors },
    } = result;

    return allErrors;
  },
);

export const getErrorDetailACtion = createAsyncThunk(
  "GET_DETAIL_ERROR",
  async id => {
    const result = await getErrorDetailApi(id);
    console.log(result);
    const {
      data: { error },
    } = result;

    return error;
  },
);
