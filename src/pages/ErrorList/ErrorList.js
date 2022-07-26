import "./ErrorList.scss";
import ErroLog from "../../components/ErrorLog/ErrorLog";
import SelectProject from "../../components/SelectProject/SelectProject";
import useUserProject from "../../hooks/useUserProject";
import useUserError from "../../hooks/useUserError";
import PagenatedButton from "../../components/PaginateButton/PaginateButton";
import ErrorFilter from "../../components/ErrorFilter/ErrorFilter";
import Loading from "../../components/Loading/Loading";
import PageHeader from "../../components/PageHeader/PageHeader";
import LogContainer from "../../components/LogContainer/LogContainer";

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
      <PageHeader title={"Error"}></PageHeader>
      <SelectProject setDsn={setDsn}></SelectProject>
      <ErrorFilter
        onSearchFilterHandler={onSearchFilterHandler}
        onOrderTypeHandler={onOrderTypeHandler}
        orderType={orderType}
      ></ErrorFilter>
      <LogContainer>
        {errors &&
          errors.map(error => <ErroLog key={error.id} error={error} />)}
      </LogContainer>
      <PagenatedButton
        prevPaginationHandler={prevPaginationHandler}
        nextPaginationHandler={nextPaginationHandler}
      ></PagenatedButton>
    </>
  );
}
