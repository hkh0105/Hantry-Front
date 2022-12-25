import "./ConditionHandler.scss";

import ErrorFilter from "../ErrorFilter/ErrorFilter";
import Dropdown from "../Dropdown/Dropdown";

export default function ConditionHandler({
  defaultDsn,
  onChangeDsn,
  optionList,
  filterHandler,
  orderTypeHandler,
  orderType,
  type,
}) {
  const DropdownProps = {
    optionList,
    defaultValue: defaultDsn,
    onChange: onChangeDsn,
    value: "dsn",
    description: "name",
  };

  const ErrorFilterProps = {
    type,
    orderType,
    onSearchFilterHandler: filterHandler,
    onOrderTypeHandler: orderTypeHandler,
  };

  return (
    <section className="condition-handler">
      <Dropdown {...DropdownProps} />
      <ErrorFilter {...ErrorFilterProps} />
    </section>
  );
}
