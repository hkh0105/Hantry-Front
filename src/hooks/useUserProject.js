import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveProject } from "../store/projectSlice";
import { getUserProjectList, getProjectDetails } from "../utils/API";

export default function useUserProject() {
  const [userProject, setUserProject] = useState(false);
  const [dsn, setDsn] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    getUserProject();
  }, []);

  useEffect(() => {
    if (!dsn) return;

    getSelectedProject(dsn);
  }, [dsn]);

  const getSelectedProject = async () => {
    const projectDetails = await getProjectDetails(dsn);
    setSelectedProject(projectDetails.data.projectDetails);
  };

  const getUserProject = async () => {
    const projectList = await getUserProjectList();
    setUserProject(projectList.data.userProject);
    dispatch(saveProject(projectList.data.userProject));
    setDsn(projectList.data.userProject[0].dsn);

    if (!projectList.data.userProject) {
      setUserProject([]);
    }
  };

  return { userProject, setUserProject, dsn, setDsn, selectedProject };
}
