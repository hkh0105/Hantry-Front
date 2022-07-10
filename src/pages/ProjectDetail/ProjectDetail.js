import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getProjectDetails,
  getProjectErrors,
  getAllErrors,
} from "../../utils/API";
import styles from "./ProjectDetail.module.css";
import LineGraph from "../../components/LineGraph/LineGraph";
import BarGraph from "../../components/BarGraph/BarGraph";
import ErroLog from "../../components/ErrorLog/ErrorLog";

export default function ProjectDetail() {
  const { dsn } = useParams();
  const [errors, setErrors] = useState([]);
  const [project, setProject] = useState({});
  const [allErrors, setAllErrors] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    (async function getDeatils() {
      const projectDetails = await getProjectDetails(dsn);
      setProject(projectDetails.data.projectDetails);

      const projectErrors = await getProjectErrors(dsn, pageNum);
      setErrors(projectErrors.data.errorList);

      const allErrors = await getAllErrors(dsn);
      setAllErrors(allErrors.data.allErrors);
      setGraphData(allErrors.data.allErrors);
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
      setGraphData(allErrors);
    } else if (event.target.value === "24h") {
      const newErrors = allErrors.filter(
        error => error.createdAt && new Date(error.createdAt).getDay() == 0,
      );

      setGraphData(newErrors);
    } else if (event.target.value === "7d") {
      const newErrors = allErrors.filter(
        error => error.createdAt && new Date(error.createdAt).getDay() < 7,
      );

      setGraphData(newErrors);
    }
  };

  return (
    <div style={{ marginTop: "4%" }}>
      <div className={styles.header}>
        <h1>프로젝트 - {project.platform}</h1>
        <img src={process.env.PUBLIC_URL + "Vectorgear.png"} />
      </div>
      <div className={styles.dsnContainer}>
        <h5>DSN</h5>
        <div className={styles.dsnTokenBox}>{project.dsn}</div>
      </div>

      <div>
        <select name="time" onChange={timeFilterButtonHandler}>
          <option value="All">All</option>
          <option value="24h">Today</option>
          <option value="7d">Last 7days</option>
        </select>
      </div>
      <div className={styles.chartContainer}>
        <BarGraph errors={graphData} />
      </div>
      <div className={styles.chartContainer}>
        <LineGraph errors={allErrors} />
      </div>
      <h5 className={styles.ErroInfoTitle}>Error Info</h5>
      <button onClick={prevPaginationHandler}>이전</button>
      <button onClick={nextPaginationHandler}>다음</button>
      <div className={styles.logBox}>
        {errors.map((error, index) => (
          <ErroLog key={index} error={error} />
        ))}
      </div>
    </div>
  );
}
