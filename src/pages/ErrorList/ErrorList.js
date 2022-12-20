import "./ErrorList.scss";

import LogContainer from "../../components/LogContainer/LogContainer";
import Loadable from "../../components/Loadable/Loadable";
import ConditionHandler from "../../components/ConditionHandler/ConditionHandler";

import useUserProject from "../../hooks/useUserProject";
import useUserError from "../../hooks/useUserError";

export default function ErrorList() {
  const { dsn, setDsn, projectList } = useUserProject();
  const { errors, onSearch, onClickOrderButton, orderType } = useUserError(dsn);

  const LoadableProps = {
    isLoading: !errors,
  };

  const ConditionHandlerProps = {
    orderType,
    type: "errorList",
    defaultDsn: projectList[0]?.dsn,
    optionList: projectList,
    onChangeDsn: setDsn,
    filterHandler: onSearch,
    orderTypeHandler: onClickOrderButton,
  };

  const LogContainerProps = {
    dsn: dsn,
  };

  return (
    <Loadable {...LoadableProps}>
      <ConditionHandler {...ConditionHandlerProps} />
      <LogContainer {...LogContainerProps} />
    </Loadable>
  );
}
