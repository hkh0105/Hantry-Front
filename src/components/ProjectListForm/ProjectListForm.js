import "./ProjectList.scss";
import { Suspense, useId, useEffect } from "react";

import ProjectCard from "../ProjectCard/ProjectCard";
import useUserProject from "../../hooks/useUserProject";
import Loading from "../Loading/Loading";

export default function ProjectListForm() {
  const { getUserProject, projectList } = useUserProject();
  const cardId = useId();

  useEffect(() => {
    getUserProject();
  }, []);
  // const { errors, navigateToDetailCard } = useProjectCard(project);

  return (
    <Suspense fallback={<Loading />}>
      <div className="project-card-form">
        {projectList?.map(project => (
          <>
            <ProjectCard project={project} key={cardId} />
          </>
        ))}
      </div>
    </Suspense>
  );
}
