import axios from "axios";
import { getCookie } from "cookies-next";

const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

API.interceptors.request.use(req => {
  if (getCookie("token")) {
    req.headers.Authorization = `Bearer ${getCookie("token")}`;
  }

  return req;
});

API.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    console.log(err);
  },
);

export const login = userInfo => API.post("/login", userInfo);
export const getUserProjectList = () => API.get("/users/project");
export const getProjectDetails = dsn => API.get(`/users/project/${dsn}`);
export const createNewProject = project =>
  API.post("/users/project", { project });
export const deleteProject = dsn => API.delete(`users/project/${dsn}`);
export const getProjectErrors = (dsn, pageNumber) =>
  API.get(`/users/project/${dsn}/error/page/${pageNumber}`);
export const getAllErrors = dsn => API.get(`/users/project/${dsn}/error`);
export const getErrorDetail = error_id => API.get(`/error/${error_id}`);
