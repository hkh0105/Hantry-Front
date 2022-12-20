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
  const InputProps = {
    placeholder: "Custon filter..",
    onChange: onSearchFilterHandler,
  };

  const ButtonProps = {
    onClick: onOrderTypeHandler,
    children:
      orderType === "ascent" ? (
        <HiOutlineSortAscending />
      ) : (
        <HiOutlineSortDescending />
      ),
  };

  return (
    <div className="filter-container">
      <span className="search">
        <BiSearchAlt />
        <input {...InputProps} />
      </span>
      <button className="order-button" {...ButtonProps} />
    </div>
  );
}
