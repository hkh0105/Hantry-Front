import "./PaginatedButton.scss";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

export default function PagenatedButton({
  prevPaginationHandler,
  nextPaginationHandler,
}) {
  return (
    <div className="pagination-button-container">
      <button className="pagination-button" onClick={prevPaginationHandler}>
        <BiLeftArrow />
      </button>
      <button className="pagination-button" onClick={nextPaginationHandler}>
        <BiRightArrow />
      </button>
    </div>
  );
}
