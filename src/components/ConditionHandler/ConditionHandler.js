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
}) {
  return (
    <section className="condition-handler">
      <Dropdown
        defaultValue={defaultDsn}
        onChange={onChangeDsn}
        optionList={optionList}
        value={"dsn"}
        description={"name"}
      />
      <ErrorFilter
        onSearchFilterHandler={filterHandler}
        onOrderTypeHandler={orderTypeHandler}
        orderType={orderType}
      />
    </section>
  );
}
