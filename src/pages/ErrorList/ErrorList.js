import "./ErrorList.scss";

import LogContainer from "../../components/LogContainer/LogContainer";
import Loadable from "../../components/Loadable/Loadable";
import ConditionHandler from "../../components/ConditionHandler/ConditionHandler";

import useUserProject from "../../hooks/useUserProject";
import useUserError from "../../hooks/useUserError";

export default function ErrorList() {
  const { dsn, setDsn, projectList } = useUserProject();
  const { errors, onSearchFilterHandler, onOrderTypeHandler, orderType } =
    useUserError(dsn);

  return (
    <>
      <Loadable isLoading={!errors}>
        <ConditionHandler
          defaultDsn={projectList[0]?.dsn}
          onChangeDsn={setDsn}
          optionList={projectList}
          filterHandler={onSearchFilterHandler}
          orderTypeHandler={onOrderTypeHandler}
          orderType={orderType}
        />
        <LogContainer dsn={dsn} />
      </Loadable>
    </>
  );
}
