import "./ProjectList.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import useUserProject from "../../hooks/useUserProject";

export default function ProjectList() {
  const { userProject } = useUserProject();

  return (
    <>
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
