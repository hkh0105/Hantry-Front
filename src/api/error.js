import { API } from "./apiConfig";
import { WEB_SERVICE } from "../constants/webservice";

export const getProjectErrors = async dsn => {
  const url = WEB_SERVICE.getProjectErrorUrl.replace("dsn", dsn);
  const result = await API.get(url);

  return result;
};

export const getFilteredErrorsApi = (dsn, pageNumber, filter, isAccent) =>
  API.get(
    `/users/project/${dsn}/error/page/${pageNumber}?filter=${filter}&order=${isAccent}`,
  );

export const getAllErrorsApi = dsn => API.get(`/users/project/${dsn}/error`);

export const getErrorDetailApi = error_id => API.get(`/error/${error_id}`);
