import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getProjectDetails,
  getProjectErrors,
  getAllErrors,
} from "../../utils/API";
import styles from "./ErrorList.module.css";
import ErroLog from "../../components/ErrorLog/ErrorLog";
import SelectProject from "../../components/SelectProject/SelectProject";

export default function ErrorList() {
  const { dsn } = useParams();
  const [errors, setErrors] = useState([]);
  const [project, setProject] = useState({});
  const [allErrors, setAllErrors] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    // (async function getUserProject() {
    //   const projectList = await getUserProjectList();
    //   setUserProject(projectList.data.userProject);
    //   if (!projectList.data.userProject) {
    //     setUserProject([]);
    //   }
    // })();
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
      <h1>Errors</h1>
      <div className={styles.filterContainer}>
        <SelectProject></SelectProject>
        <select name="type" className={styles.typeFilter}>
          <option value="compile">Type Filter</option>
          <option value="compile">Compile Error</option>
          <option value="syntax">Syntax Error</option>
        </select>
        <span className={styles.onOff}>
          <input type="checkbox" id="recent" />
          <label htmlFor="recent"></label>
          최신순
        </span>
        <span className={styles.onOff}>
          <input type="checkbox" id="old" />
          <label htmlFor="old"></label>
          오래된순
        </span>
        <div className={styles.space}></div>
        <span className={styles.search}>
          <img src={process.env.PUBLIC_URL + "glass.png"} />
          <input placeholder="Custon filter.."></input>
        </span>
      </div>
      <div className={styles.logBox}>
        {errors.map(error => (
          <ErroLog key={error.id} error={error} />
        ))}
      </div>
    </div>
  );
}
