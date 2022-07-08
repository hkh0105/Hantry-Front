import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProjectList.module.css";
import ProjectChart from "../../components/projectChart/projectChart";

export default function ProjectList() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "테스트플젝1",
    },
    {
      id: 2,
      name: "테스트플젝1",
    },
  ]);

  return (
    <div style={{ marginTop: "4%" }}>
      <div className={styles.header}>
        <h1>Projects</h1>
        <button onClick={() => navigate("/create_project")}>
          + Create Project
        </button>
      </div>
      <div className={styles.projects}>
        {projects.map(project => (
          <ProjectChart key={project.id} name={project.name} />
        ))}
      </div>
    </div>
  );
}
