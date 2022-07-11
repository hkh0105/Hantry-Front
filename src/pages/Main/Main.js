import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveProject } from "../../store/projectSlice";
import { getUserProjectList } from "../../utils/API";
import CreateButton from "../../components/CreateButton/CreateButton";
import ProjectList from "../ProjectList/ProjectList";

export default function Main() {
  const [userProject, setUserProject] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async function getUserProject() {
      const projectList = await getUserProjectList();
      setUserProject(projectList.data.userProject);
      dispatch(saveProject(projectList.data.userProject));

      if (!projectList.data.userProject) {
        setUserProject([]);
      }
    })();
  }, []);

  return (
    <>
      {userProject && userProject.length && (
        <ProjectList projects={userProject} />
      )}
      {userProject && !userProject.length && <CreateButton />}
    </>
  );
}
