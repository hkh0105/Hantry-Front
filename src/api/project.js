import { API } from "./apiConfig";
import { WEB_SERVICE } from "../constants/webservice";

export const getProjectListApi = () => API.get(WEB_SERVICE.getProjectListUrl);
export const getProjectDetailsApi = async dsn =>
  API.get(WEB_SERVICE.getProjectDetailsUrl + dsn);
export const createNewProjectApi = project =>
  API.post("/users/project", { project });
export const deleteProject = dsn => API.delete(`users/project/${dsn}`);
export const updateProject = (dsn, project) =>
  API.patch(`/users/project/${dsn}`, { project });
