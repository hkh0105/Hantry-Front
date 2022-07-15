import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveProject } from "../../store/projectSlice";
import { getUserProjectList } from "../../utils/API";
import "./ProjectList.scss";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function ProjectList() {
  const [userProject, setUserProject] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getUserProject();
  }, []);

  const getUserProject = async () => {
    const projectList = await getUserProjectList();
    setUserProject(projectList.data.userProject);
    dispatch(saveProject(projectList.data.userProject));

    if (!projectList.data.userProject) {
      setUserProject([]);
    }
  };

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
