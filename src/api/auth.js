import { API } from "./apiConfig";
import { WEB_SERVICE } from "../constants/webservice";

export const login = userInfo => API.post("/login", userInfo);
