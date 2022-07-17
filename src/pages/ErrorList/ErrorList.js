import "./ErrorList.scss";
import ErroLog from "../../components/ErrorLog/ErrorLog";
import SelectProject from "../../components/SelectProject/SelectProject";
import useUserProject from "../../hooks/useUserProject";
import useUserError from "../../hooks/useUserError";
import PagenatedButton from "../../components/PaginateButton/PaginateButton";
import ErrorFilter from "../../components/ErrorFilter/ErrorFilter";

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
  } = useUserError(dsn);

  return (
    <div style={{ marginTop: "4%" }}>
      <h1>Errors</h1>
      <SelectProject setDsn={setDsn}></SelectProject>
      <ErrorFilter onSearchFilterHandler={onSearchFilterHandler}></ErrorFilter>
      <div className="log-box">
        {errors &&
          errors.map(error => <ErroLog key={error.id} error={error} />)}
      </div>
      <PagenatedButton
        prevPaginationHandler={prevPaginationHandler}
        nextPaginationHandler={nextPaginationHandler}
      ></PagenatedButton>
    </div>
  );
}
