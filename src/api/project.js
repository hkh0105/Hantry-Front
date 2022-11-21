import { API } from "./apiConfig";
import { WEB_SERVICE } from "../constants/webservice";

export const getProjectListApi = () => API.get(WEB_SERVICE.getProjectListUrl);
