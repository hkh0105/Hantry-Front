import "./ProjectList.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import useUserProject from "../../hooks/useUserProject";
import Loading from "../Loading/Loading";

export default function ProjectListForm() {
  const { projectList } = useUserProject();

  return (
    <>
      {projectList ? (
        <div className="project-card-form">
          {projectList?.map(project => (
            <>
              <ProjectCard project={project} />
            </>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
