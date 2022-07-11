import { useState, useEffect } from "react";
import styles from "./SelectProject.module.css";
import useSelectProject from "../../hooks/useSelectProject";
import { useNavigate } from "react-router-dom";

export default function SelectProject() {
  const [projects, setProjects] = useState("");
  const [selectedProject, setSelectedProject] = useState("");

  useEffect(() => {
    (async function getUserProject() {
      const projectList = await getUserProjectList();
      setProjects(projectList.data.userProject);

      if (projectList && projectList.data)
        setSelectedProject(projectList.data.userProject[0].dsn);
    })();
  }, [projects]);

  const onClick = event => {
    setSelectedProject(event.target.value);
  };
  return (
    <>
      <select name="project" className={styles.projectFilter}>
        {projects &&
          projects.map(project => {
            <option value={project.dsn} onClick={onClick}>
              {project.name}
            </option>;
          })}
      </select>
    </>
  );
}
