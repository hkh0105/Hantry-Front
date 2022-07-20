import "./ProjectList.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import useUserProject from "../../hooks/useUserProject";
import Loading from "../Loading/Loading";

export default function ProjectList() {
  const { userProject } = useUserProject();

  return (
    <>
      {!userProject && <Loading></Loading>}
      {userProject && userProject.length && (
        <div className="project-card-form">
          {userProject &&
            userProject.length &&
            userProject.map(project => (
              <>
                <ProjectCard project={project} />
              </>
            ))}
        </div>
      )}
    </>
  );
}
