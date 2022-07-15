import "./ProjectCard.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllErrors } from "../../utils/API";
import LineGraph from "../LineGraph/LineGraph";

export default function ProjectCard({ project }) {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async function getErrors() {
      const errors = await getAllErrors(project.dsn);
      console.log(errors.data.allErrors);
      setErrors(errors.data.allErrors);
    })();
  }, []);

  const projectCardButtonHandler = event => {
    event.preventDefault();
    navigate(`/project_detail/${project.dsn}`);
  };

  return (
    <>
      <div className="card-container">
        <div className="card" onClick={projectCardButtonHandler}>
          <div className="title">{project.name}</div>
          <div className="chart-container">
            <LineGraph errors={errors}></LineGraph>
          </div>
          <h4 className="card-title">{project.platform}</h4>
          <p className="card-text ">If you want to see details, Click here!</p>
        </div>
      </div>
    </>
  );
}
