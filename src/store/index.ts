import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import projectReducer from "./projectSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import modalSliceReducer from "./modalSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    project: projectReducer,
    modal: modalSliceReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
