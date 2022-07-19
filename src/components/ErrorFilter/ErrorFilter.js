import {
  HiOutlineSortAscending,
  HiOutlineSortDescending,
} from "react-icons/hi";

export default function ErrorFilter({
  onSearchFilterHandler,
  onOrderTypeHandler,
  orderType,
}) {
  return (
    <div className="filter-container">
      <span className="search">
        <img src={process.env.PUBLIC_URL + "glass.png"} />
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
