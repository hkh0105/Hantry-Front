import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserProjectList } from "../../utils/API";
import CreateButton from "../../components/CreateButton/CreateButton";
import ProjectList from "../ProjectList/ProjectList";
import CreateProject from "../CreateProject/CreateProject";

export default function Main() {
  const [userProject, setUserProject] = useState([]);

  useEffect(() => {
    (async () => {
      const projectList = await getUserProjectList();
      setUserProject(projectList.data.userProject);
    })();
  }, [window.location.href]);

  return (
    <>
      {userProject && userProject.length && <ProjectList />}
      {userProject && !userProject.length && <CreateButton />}
    </>
  );
}
