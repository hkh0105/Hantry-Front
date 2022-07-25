import "./ProjectDetail.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import LineGraph from "../../components/LineGraph/LineGraph";
import BarGraph from "../../components/BarGraph/BarGraph";
import ErroLog from "../../components/ErrorLog/ErrorLog";
import ProjectBaseInfo from "../../components/ProjectBaseInfo/ProjectBaseInfo";
import Loading from "../../components/Loading/Loading";
import useUserProject from "../../hooks/useUserProject";
import useUserError from "../../hooks/useUserError";
import PagenatedButton from "../../components/PaginateButton/PaginateButton";
import WhiteBackGroundInfoContainer from "../../components/WhiteBackGroundInfoContainer/WhiteBackGroundInfoContainer";
import LogContainer from "../../components/LogContainer/LogContainer";
import SelectBasicForm from "../../components/SelectBasicForm/SelectBasicForm";
import useGraphFilter from "../../hooks/useGraphFilter";
import { GrpahTimeList } from "../../utils/constants";
import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const dsn = useParams().dsn;
  const { setDsn, selectedProject } = useUserProject(dsn);
  const { errors, nextPaginationHandler, prevPaginationHandler, allErrors } =
    useUserError(dsn);
  const { graphData, timeFilterButtonHandler } = useGraphFilter(allErrors);

  return (
    <>
      <PageHeader title={"ProjectDetail"} subTitle={"Project"} />
      {!selectedProject && <Loading />}
      {selectedProject && (
        <>
          <ProjectBaseInfo project={selectedProject}></ProjectBaseInfo>
          <WhiteBackGroundInfoContainer title={"Graph"}>
            <SelectBasicForm
              optionList={GrpahTimeList}
              defaultValue={"All"}
              onChange={timeFilterButtonHandler}
            ></SelectBasicForm>
            <div className="chart-container">
              <BarGraph
                inputs={graphData}
                keys={["count"]}
                bottom="Type"
                indexBy="type"
                left="Count"
              />
            </div>
            <div className="chart-container">
              <LineGraph errors={allErrors} />
            </div>
          </WhiteBackGroundInfoContainer>
          <WhiteBackGroundInfoContainer title={"Error Log"}>
            <LogContainer>
              {errors.map((error, index) => (
                <ErroLog key={index} error={error} />
              ))}
            </LogContainer>
          </WhiteBackGroundInfoContainer>
          <PagenatedButton
            prevPaginationHandler={prevPaginationHandler}
            nextPaginationHandler={nextPaginationHandler}
          ></PagenatedButton>
        </>
      )}
    </>
  );
}
