import "./ProjectCard.scss";
import { useNavigate } from "react-router-dom";
import LineGraph from "../LineGraph/LineGraph";
import useProjectError from "../../hooks/useProjectError";

export default function ProjectCard({ project }) {
  const { errors } = useProjectError(project);
  const navigate = useNavigate();

  const projectCardButtonHandler = event => {
    event.preventDefault();
    navigate(`/project_detail/${project.dsn}`);
  };

  return (
    <>
      <div className="card-container" style={{ marginTop: 40 }}>
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
