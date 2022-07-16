import styles from "./SelectProject.module.css";
import useUserProject from "../../hooks/useUserProject";

export default function SelectProject({ setDsn }) {
  const { userProject } = useUserProject();

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
