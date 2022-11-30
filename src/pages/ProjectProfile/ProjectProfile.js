import { useNavigate } from "react-router-dom";
import useUserProject from "../../hooks/useUserProject";
import BarGraph from "../../components/BarGraph/BarGraph";
import Loading from "../../components/Loading/Loading";
import PageHeader from "../../components/PageHeader/PageHeader";
import CardDetails from "../../components/CardDetails/CardDetails";
import Dropdown from "../../components/Dropdown/Dropdown";
import Loadable from "../../components/Loadable/Loadable";
import ConditionHandler from "../../components/ConditionHandler/ConditionHandler";
import { useEffect } from "react";
import { ProfileTypesColumns } from "../../constants";

export default function ProjectProfile() {
  const navigate = useNavigate();
  const { dsn, setDsn, profiles, projectList, getSelectedProject } =
    useUserProject();
  const profileKeys = Object.keys(profiles).filter(
    columns => ProfileTypesColumns[columns],
  );
  const onNavigateProfileDetailHandler = event => {
    event.preventDefault();

    navigate(`/profile_detail/${event.target.innerText.toLowerCase()}`, {
      state: {
        dsn: dsn,
      },
    });
  };

  useEffect(() => {
    getSelectedProject(dsn);
  }, [dsn]);

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
