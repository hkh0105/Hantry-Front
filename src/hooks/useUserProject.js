import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveProject } from "../store/projectSlice";
import { getUserProjectList } from "../utils/API";

export default function useUserProject() {
  const [userProject, setUserProject] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getUserProject();
  }, []);

  const getUserProject = async () => {
    const projectList = await getUserProjectList();
    console.log(projectList);
    setUserProject(projectList.data.userProject);
    dispatch(saveProject(projectList.data.userProject));

    if (!projectList.data.userProject) {
      setUserProject([]);
    }
  };

  return { userProject, setUserProject };
}
