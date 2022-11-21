import { API } from "./apiConfig";
import { WEB_SERVICE } from "../constants/webservice";

export const getProjectErrors = async dsn => {
  const url = WEB_SERVICE.getProjectErrorUrl.replace("dsn", dsn);
  const result = await API.get(url);

  return result;
};
