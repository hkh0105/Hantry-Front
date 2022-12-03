import BarGraph from "../../components/BarGraph/BarGraph";
import CardDetails from "../../components/CardDetails/CardDetails";
import Loadable from "../../components/Loadable/Loadable";
import ConditionHandler from "../../components/ConditionHandler/ConditionHandler";

import useProjectProfile from "./useProjectProfile";
import { ProfileTypesColumns } from "../../constants";

export default function ProjectProfile() {
  const { dsn, setDsn, profiles, projectList, profileKeys } =
    useProjectProfile();

  return (
    <Loadable isLoading={!profiles}>
      <ConditionHandler
        defaultDsn={projectList[0]?.dsn}
        onChangeDsn={setDsn}
        optionList={projectList}
        type="profile"
      />
      <>
        {profileKeys?.map((column, index) => (
          <CardDetails
            path={`/profile_detail/${column.toLowerCase()}`}
            state={{ dsn: dsn }}
            title={ProfileTypesColumns[column].title}
            description={ProfileTypesColumns[column].description}
            key={index}
          >
            <BarGraph
              inputs={ProfileTypesColumns[column].inputs(profiles[column])}
              keys={ProfileTypesColumns[column].keys}
              bottom={ProfileTypesColumns[column].bottom}
              indexBy={ProfileTypesColumns[column].indexBy}
              left={ProfileTypesColumns[column].left}
            />
          </CardDetails>
        ))}
      </>
    </Loadable>
  );
}
