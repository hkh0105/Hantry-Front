import "./LogContainer.scss";

import ErrorLog from "../ErrorLog/ErrorLog";
import PagenatedButton from "../PaginateButton/PaginateButton";
import WhiteWrapper from "../WhiteWrapper/WhiteWrapper";

import useUserError from "../../hooks/useUserError";

export default function LogContainer({ dsn }) {
  const { errors, nextPaginationHandler, prevPaginationHandler } =
    useUserError(dsn);

  return (
    <WhiteWrapper title={"Error Log"}>
      <div className="log-box">
        {errors.map((error, index) => (
          <ErrorLog key={index} error={error} />
        ))}
      </div>
      <PagenatedButton
        prevPaginationHandler={prevPaginationHandler}
        nextPaginationHandler={nextPaginationHandler}
      ></PagenatedButton>
    </WhiteWrapper>
  );
}
