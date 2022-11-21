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
    window.localStorage.clear();
    return window.location.assign("/login");
  },
);
