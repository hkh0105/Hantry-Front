import {
  HiOutlineSortAscending,
  HiOutlineSortDescending,
} from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";

export default function ErrorFilter({
  onSearchFilterHandler,
  onOrderTypeHandler,
  orderType,
  type,
}) {
  if (type !== "errorList") return null;
  return (
    <div className="filter-container">
      <span className="search">
        <BiSearchAlt />
        <input
          placeholder="Custon filter.."
          onChange={onSearchFilterHandler}
        ></input>
      </span>
      <button className="order-button" onClick={onOrderTypeHandler}>
        {orderType === "ascent" ? (
          <HiOutlineSortAscending />
        ) : (
          <HiOutlineSortDescending />
        )}
      </button>
    </div>
  );
}
