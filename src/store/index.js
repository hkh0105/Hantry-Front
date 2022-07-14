import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import projectReducer from "./projectSlice";
import modalSliceReducer from "./modalSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    project: projectReducer,
    modal: modalSliceReducer,
  },
});

export default store;
