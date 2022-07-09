import axios from "axios";
import { getCookie } from "cookies-next";

const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

if (localStorage.getItem("isLoggedIn") === "true") {
  API.interceptors.request.use(req => {
    if (getCookie("token")) {
      req.headers.Authorization = `Bearer ${getCookie("token")}`;
    }

    return req;
  });
}

API.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    localStorage.removeItem("isLoggedIn");
    return console.log(err);
  },
);

export const login = userInfo => API.post("/login", userInfo);
export const getUserProjectList = () => API.get("/users/project");
export const createNewProject = project =>
  API.post("/users/project", { project });
