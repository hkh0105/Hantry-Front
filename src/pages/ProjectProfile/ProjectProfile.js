import BarGraph from "../../components/BarGraph/BarGraph";
import CardDetails from "../../components/CardDetails/CardDetails";
import Loadable from "../../components/Loadable/Loadable";
import ConditionHandler from "../../components/ConditionHandler/ConditionHandler";

import useProjectProfile from "./useProjectProfile";
import { ProfileTypesColumns } from "../../constants";
import BarGraphCardList from "../../components/BarGraphCardList/BarGraphCardList";

export default function ProjectProfile() {
  const { dsn, setDsn, profile, projectList, profileKeys } =
    useProjectProfile();

  const ConditionHandlerProps = {
    defaultDsn: projectList[0]?.dsn,
    onChangeDsn: setDsn,
    optionList: projectList,
    // type: "profile",
  };

  const BarGraphCardListProps = {
    informationList: profileKeys,
    dsn: dsn ?? projectList[0]?.dsn,
    typeColumns: ProfileTypesColumns,
    profile,
  };

  return (
    <Loadable isLoading={!profile}>
      <ConditionHandler {...ConditionHandlerProps} />
      <BarGraphCardList {...BarGraphCardListProps} />
    </Loadable>
  );
}
