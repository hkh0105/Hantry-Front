import axios from "axios";
import { getCookie } from "cookies-next";

export const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

API.interceptors.request.use(req => {
  req.headers["Access-Control-Allow-Origin"] = "*";
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
export const createNewProject = project =>
  API.post("/users/project", { project });
export const deleteProject = dsn => API.delete(`users/project/${dsn}`);
export const getErrorDetail = error_id => API.get(`/error/${error_id}`);
export const updateProject = (dsn, project) =>
  API.patch(`/users/project/${dsn}`, { project });
export const updateSourceMap = (dsn, sourceMap) =>
  API.post(`/users/project/${dsn}/sourceMap`, { sourceMap });
export const deleteSourceMap = dsn =>
  API.delete(`/users/project/${dsn}/sourceMap`);
