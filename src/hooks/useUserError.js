import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveProject } from "../store/projectSlice";
import {
  getProjectErrors,
  getAllErrors,
  getUserProjectList,
} from "../utils/API";

export default function useUserError(dsn) {
  const [errors, setErrors] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");

  useEffect(() => {
    (async function getErrors() {
      if (!dsn) return;
      const pagedErrors = await getProjectErrors(dsn, pageNum);
      setErrors(pagedErrors.data.errorList);
    })();
  }, [dsn]);

  const nextPaginationHandler = async event => {
    event.preventDefault();

    const projectErrors = await getProjectErrors(
      dsn,
      pageNum + 1,
      currentSearch,
    );
    setErrors(projectErrors.data.errorList);
    setPageNum(pageNum + 1);
  };

  const prevPaginationHandler = async event => {
    event.preventDefault();

    if (pageNum === 1) return;

    const projectErrors = await getProjectErrors(
      dsn,
      pageNum - 1,
      currentSearch,
    );
    setErrors(projectErrors.data.errorList);
    setPageNum(pageNum - 1);
  };

  const onSearchFilterHandler = async event => {
    event.preventDefault();
    const parsedErrors = await getProjectErrors(
      dsn,
      pageNum,
      event.target.value,
    );
    setErrors(parsedErrors.data.errorList);
    setCurrentSearch(event.target.value);
  };

  return {
    errors,
    setErrors,
    pageNum,
    setPageNum,
    currentSearch,
    setCurrentSearch,
    nextPaginationHandler,
    prevPaginationHandler,
    onSearchFilterHandler,
  };
}
