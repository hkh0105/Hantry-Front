import "./ProjectDetail.scss";
import { useParams } from "react-router-dom";

import BasicInformationContainer from "../../components/BasicInformationContainer/BasicInformationContainer";
import LogContainer from "../../components/LogContainer/LogContainer";
import GraphContainer from "../../components/GraphContainer/GraphContainer";

export default function ProjectDetail() {
  const { dsn } = useParams();

  return (
    <>
      <BasicInformationContainer dsn={dsn} />
      <GraphContainer dsn={dsn} />
      <LogContainer dsn={dsn} />
    </>
  );
}
