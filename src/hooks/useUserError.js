import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllErrorsAction,
  getFiteredErrorAction,
} from "../store/thunkAction/errorAction";

export default function useUserError(dsn) {
  const [pageNum, setPageNum] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");
  const [orderType, setOrderType] = useState("ascent");
  const { allErrors, errors } = useSelector(state => state.project);
  const dispatch = useDispatch();

  useEffect(() => {
    getErrors(dsn);
  }, [dsn]);

  const getErrors = () => {
    if (!dsn) return;

    const condition = {
      dsn,
      pageNum: pageNum,
      filter: currentSearch,
      orderType,
    };

    dispatch(getAllErrorsAction(dsn));
    dispatch(getFiteredErrorAction(condition));
  };

  const nextPaginationHandler = event => {
    event.preventDefault();

    const condition = {
      dsn,
      pageNum: pageNum + 1,
      filter: currentSearch,
      orderType,
    };
    dispatch(getFiteredErrorAction(condition));
    setPageNum(pageNum + 1);
  };

  const prevPaginationHandler = event => {
    event.preventDefault();

    if (pageNum === 1) return;

    const condition = {
      dsn,
      pageNum: pageNum - 1,
      filter: currentSearch,
      orderType,
    };
    dispatch(getFiteredErrorAction(condition));
    setPageNum(pageNum - 1);
  };

  const onSearch = async event => {
    event.preventDefault();

    const filter = event.target.value;
    const condition = { dsn, pageNum, filter, orderType };
    dispatch(getFiteredErrorAction(condition));
    setCurrentSearch(event.target.value);
  };

  const onClickOrderButton = async event => {
    event.preventDefault();

    if (orderType === "ascent") {
      const condition = {
        dsn,
        pageNum: 1,
        filter: currentSearch,
        orderType: "descent",
      };

      dispatch(getFiteredErrorAction(condition));
      setOrderType("descent");
      setPageNum(1);
    } else {
      const condition = {
        dsn,
        pageNum: 1,
        filter: currentSearch,
        orderType: "ascent",
      };

      dispatch(getFiteredErrorAction(condition));
      setOrderType("ascent");
      setPageNum(1);
    }
  };

  return {
    errors,
    pageNum,
    setPageNum,
    getErrors,
    currentSearch,
    setCurrentSearch,
    onClickOrderButton,
    nextPaginationHandler,
    prevPaginationHandler,
    onSearch,
    orderType,
    allErrors,
  };
}
