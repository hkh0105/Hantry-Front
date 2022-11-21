import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import projectReducer from "./projectSlice";
import modalSliceReducer from "./modalSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    project: projectReducer,
    modal: modalSliceReducer,
  },
  middleware: getDefaultMiddleware(),
});

export default store;
