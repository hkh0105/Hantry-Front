import { useState, useEffect } from "react";
import { getProjectErrors, getAllErrors } from "../../utils/API";
import { useSelector } from "react-redux";
import styles from "./ErrorList.module.css";
import ErroLog from "../../components/ErrorLog/ErrorLog";
import SelectProject from "../../components/SelectProject/SelectProject";

export default function ErrorList() {
  const projects = useSelector(state => state.project.projects);
  const [dsn, setDsn] = useState(projects[0].dsn);
  const [errors, setErrors] = useState([]);
  const [allErrors, setAllErrors] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    (async function getErrors() {
      const pagedErrors = await getProjectErrors(dsn, pageNum);
      setErrors(pagedErrors.data.errorList);

      const allErrors = await getAllErrors(dsn);
      setAllErrors(allErrors.data.allErrors);
    })();
  }, [dsn]);

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

  return (
    <div style={{ marginTop: "4%" }}>
      <h1>Errors</h1>
      <div className={styles.filterContainer}>
        <SelectProject setDsn={setDsn}></SelectProject>
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
      <button onClick={prevPaginationHandler}>이전</button>
      <button onClick={nextPaginationHandler}>다음</button>
      <div className={styles.logBox}>
        {errors.map(error => (
          <ErroLog key={error.id} error={error} />
        ))}
      </div>
    </div>
  );
}
