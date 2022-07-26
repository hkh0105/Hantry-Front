import styles from "./SelectProject.module.css";
import useUserProject from "../../hooks/useUserProject";
import { useEffect } from "react";

export default function SelectProject({ setDsn }) {
  const { userProject } = useUserProject();

  useEffect(() => {
    if (userProject && userProject[0].dsn) {
      setDsn(userProject[0].dsn);
    }
  }, []);

  const projectSelectOptionHandler = event => {
    event.preventDefault();
    setDsn(event.target.value);
  };

  return (
    <>
      <select
        name="project"
        className={styles.projectFilter}
        onChange={projectSelectOptionHandler}
      >
        {userProject &&
          userProject.map(project => {
            return (
              <>
                <option value={project.dsn}>{project.name}</option>
              </>
            );
          })}
      </select>
    </>
  );
}
