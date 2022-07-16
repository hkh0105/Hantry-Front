import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveProject } from "../store/projectSlice";
import { getUserProjectList } from "../utils/API";

export default function useUserProject() {
  const [userProject, setUserProject] = useState(false);
  const [dsn, setDsn] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getUserProject();
  }, []);

  const getUserProject = async () => {
    const projectList = await getUserProjectList();
    setUserProject(projectList.data.userProject);
    dispatch(saveProject(projectList.data.userProject));
    setDsn(projectList.data.userProject[0].dsn);
    if (!projectList.data.userProject) {
      setUserProject([]);
    }
  };

  return { userProject, setUserProject, dsn, setDsn };
}
