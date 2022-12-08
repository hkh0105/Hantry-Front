import { useState, useEffect } from "react";
import { getErrorDetailApi } from "../../api/error";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getErrorDetailACtion } from "../../store/thunkAction/errorAction";
import { useParams } from "react-router-dom";

export default function useErrorDetail() {
  const { errorId } = useParams();
  const { selectedError } = useSelector(state => state.project);
  const dispatch = useDispatch();

  useEffect(() => {
    getErrorDetail();
  }, []);

  const getErrorDetail = () => {
    dispatch(getErrorDetailACtion(errorId));
    // const errorDetail = await getErrorDetailApi(errorId);
    //   setError(errorDetail.data.error);
  };

  return { selectedError };
}
