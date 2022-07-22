import "./ProjectDetail.scss";
import LineGraph from "../../components/LineGraph/LineGraph";
import BarGraph from "../../components/BarGraph/BarGraph";
import ErroLog from "../../components/ErrorLog/ErrorLog";
import ProjectBaseInfo from "../../components/ProjectBaseInfo/ProjectBaseInfo";
import Loading from "../../components/Loading/Loading";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getProjectDetails,
  getProjectErrors,
  getAllErrors,
} from "../../utils/API";
import { parseErrorsPerType } from "../../utils/parseErrors";

export default function ProjectDetail() {
  const { dsn } = useParams();
  const [errors, setErrors] = useState([]);
  const [project, setProject] = useState({});
  const [allErrors, setAllErrors] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [graphData, setGraphData] = useState([
    { type: "init", count: 50 },
    { type: "initial", count: 35 },
  ]);

  useEffect(() => {
    (async function getDeatils() {
      const projectDetails = await getProjectDetails(dsn);
      setProject(projectDetails.data.projectDetails);
      const projectErrors = await getProjectErrors(dsn, pageNum, "", "ascent");
      setErrors(projectErrors.data.errorList);
      const allErrors = await getAllErrors(dsn);
      setAllErrors(allErrors.data.allErrors);
      setGraphData(parseErrorsPerType(allErrors.data.allErrors));
    })();
  }, [pageNum]);

  const nextPaginationHandler = async event => {
    event.preventDefault();

    const projectErrors = await getProjectErrors(dsn, pageNum + 1);
    setErrors(projectErrors.data.errorList);
    setPageNum(pageNum + 1);
  };

  const prevPaginationHandler = async event => {
    event.preventDefault();
    if (pageNum === 1) return;
    const projectErrors = await getProjectErrors(dsn, pageNum - 1);
    setErrors(projectErrors.data.errorList);
    setPageNum(pageNum - 1);
  };

  const timeFilterButtonHandler = event => {
    event.preventDefault();

    if (event.target.value === "All") {
      setGraphData(parseErrorsPerType(allErrors));
    } else if (event.target.value === "24h") {
      const newErrors = allErrors.filter(
        error => error.createdAt && new Date(error.createdAt).getDay() == 0,
      );

      setGraphData(parseErrorsPerType(newErrors));
    } else if (event.target.value === "7d") {
      const newErrors = allErrors.filter(
        error => error.createdAt && new Date(error.createdAt).getDay() < 7,
      );

      setGraphData(parseErrorsPerType(newErrors));
    }
  };

  return (
    <>
      {!project && <Loading />}
      {project && (
        <div style={{ marginTop: "4%" }}>
          <ProjectBaseInfo project={project} />
          <h2>Graph</h2>
          <select
            className="graph-select"
            name="time"
            onChange={timeFilterButtonHandler}
          >
            <option value="All">All</option>
            <option value="24h">Today</option>
            <option value="7d">Last 7days</option>
          </select>
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
          <h2>Error Info</h2>
          <div className="log-box">
            {errors.map((error, index) => (
              <ErroLog key={index} error={error} />
            ))}
          </div>
          <div className="pagination-button-container">
            <button
              className="pagination-button"
              onClick={prevPaginationHandler}
            >
              <BiLeftArrow />
            </button>
            <button
              className="pagination-button"
              onClick={nextPaginationHandler}
            >
              <BiRightArrow />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
