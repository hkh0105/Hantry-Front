import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProjectList.module.css";
import ProjectChart from "../../components/ProjectChart/ProjectChart";

export default function ProjectList({ projects }) {
  const navigate = useNavigate();

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
          <ProjectChart
            key={project._id}
            name={project.name}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}
