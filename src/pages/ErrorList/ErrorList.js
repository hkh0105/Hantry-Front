import "./ErrorList.scss";
import ErroLog from "../../components/ErrorLog/ErrorLog";
import SelectProject from "../../components/SelectProject/SelectProject";
import useUserProject from "../../hooks/useUserProject";
import useUserError from "../../hooks/useUserError";
import PagenatedButton from "../../components/PaginateButton/PaginateButton";
import ErrorFilter from "../../components/ErrorFilter/ErrorFilter";
import Loading from "../../components/Loading/Loading";

export default function ErrorList() {
  const { userProject, dsn, setDsn } = useUserProject();
  const {
    errors,
    setErrors,
    pageNum,
    setPageNum,
    currentSearch,
    setCurrentSearch,
    nextPaginationHandler,
    prevPaginationHandler,
    onSearchFilterHandler,
    onOrderTypeHandler,
    orderType,
  } = useUserError(dsn);

  return (
    <>
      {!errors && <Loading />}
      <div style={{ marginTop: "5vh" }}>
        <h1>Errors</h1>
        <SelectProject setDsn={setDsn}></SelectProject>
        <ErrorFilter
          onSearchFilterHandler={onSearchFilterHandler}
          onOrderTypeHandler={onOrderTypeHandler}
          orderType={orderType}
        ></ErrorFilter>
        <div className="log-box">
          {errors &&
            errors.map(error => <ErroLog key={error.id} error={error} />)}
        </div>
        <PagenatedButton
          prevPaginationHandler={prevPaginationHandler}
          nextPaginationHandler={nextPaginationHandler}
        ></PagenatedButton>
      </div>
    </>
  );
}
