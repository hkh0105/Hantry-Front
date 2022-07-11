import { useState, useEffect } from "react";
import styles from "./SelectProject.module.css";
import { useSelector } from "react-redux";

export default function SelectProject({ setDsn }) {
  const projects = useSelector(state => state.project.projects);

  const projectSelectOptionHandler = event => {
    event.preventDefault();
    setDsn(event.target.value);
  };
  return (
    <>
      <select name="project" className={styles.projectFilter}>
        {projects &&
          projects.map(project => {
            return (
              <>
                <option
                  value={project.dsn}
                  onClick={projectSelectOptionHandler}
                >
                  {project.name}
                </option>
              </>
            );
          })}
      </select>
    </>
  );
}
