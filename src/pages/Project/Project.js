import ProjectList from "../../components/ProjectList/ProjectList";
import "./Project.scss";

export default function Project() {
  return (
    <>
      <div className="header">
        <h1>Projects</h1>
        <button onClick={() => navigate("/create_project")}>
          + Create Project
        </button>
      </div>
      <ProjectList />
    </>
  );
}
