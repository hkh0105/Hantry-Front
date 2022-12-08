import { API } from "./apiConfig";
import { WEB_SERVICE } from "../constants/webservice";

export const getProjectListApi = () => API.get(WEB_SERVICE.getProjectListUrl);
export const getProjectDetailsApi = async dsn =>
  API.get(WEB_SERVICE.getProjectDetailsUrl + dsn);
