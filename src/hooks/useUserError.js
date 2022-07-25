import { useEffect, useState } from "react";
import { getProjectErrors, getAllErrors } from "../utils/API";

export default function useUserError(dsn) {
  const [errors, setErrors] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");
  const [orderType, setOrderType] = useState("ascent");
  const [allErrors, setAllErrors] = useState([]);

  useEffect(() => {
    (async function getErrors() {
      if (!dsn) return;

      const pagedErrors = await getProjectErrors(dsn, pageNum, "", orderType);
      setErrors(pagedErrors.data.errorList);

      const projectAllErrors = await getAllErrors(dsn);
      setAllErrors(projectAllErrors.data.allErrors);
    })();
  }, [dsn]);

  const nextPaginationHandler = async event => {
    event.preventDefault();

    const projectErrors = await getProjectErrors(
      dsn,
      pageNum + 1,
      currentSearch,
      orderType,
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
      orderType,
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
      orderType,
    );
    setErrors(parsedErrors.data.errorList);
    setCurrentSearch(event.target.value);
  };

  const onOrderTypeHandler = async event => {
    event.preventDefault();

    if (orderType === "ascent") {
      const projectErrors = await getProjectErrors(
        dsn,
        1,
        currentSearch,
        "descent",
      );

      setErrors(projectErrors.data.errorList);
      setOrderType("descent");
      setPageNum(1);
    } else {
      const projectErrors = await getProjectErrors(
        dsn,
        1,
        currentSearch,
        "ascent",
      );

      setErrors(projectErrors.data.errorList);
      setOrderType("ascent");
      setPageNum(1);
    }
  };

  return {
    errors,
    setErrors,
    pageNum,
    setPageNum,
    currentSearch,
    setCurrentSearch,
    onOrderTypeHandler,
    nextPaginationHandler,
    prevPaginationHandler,
    onSearchFilterHandler,
    orderType,
    allErrors,
  };
}
