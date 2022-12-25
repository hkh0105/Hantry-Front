import { API } from "./apiConfig";
import { WEB_SERVICE } from "../constants/webservice";

export const updateSourceMap = (dsn, sourceMap) =>
  API.post(`/users/project/${dsn}/sourceMap`, { sourceMap });
export const deleteSourceMap = dsn =>
  API.delete(`/users/project/${dsn}/sourceMap`);
