import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveProject } from "../store/projectSlice";
import { getUserProjectList, getProjectDetails } from "../utils/API";
import { ProfileTypes } from "../utils/constants";

export default function useUserProject(projectId = null) {
  const [userProject, setUserProject] = useState(false);
  const [dsn, setDsn] = useState(projectId);
  const [selectedProject, setSelectedProject] = useState({});
  const [profiles, setProfiles] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    getUserProject();
  }, []);

  useEffect(() => {
    if (!dsn) return;

    getSelectedProject(dsn);
  }, [dsn]);

  useEffect(() => {
    getProjectProfiles();
  }, [selectedProject]);

  const getProjectProfiles = () => {
    const profile = {
      "first-input": [],
      "largest-contentful-paint": [],
      "layout-shift": [],
      longtask: [],
      navigation: [],
      paint: [],
    };

    if (!selectedProject || !selectedProject.performance) return;
    const profileList = selectedProject && selectedProject.performance;

    for (let i = 0; i < profileList.length; i++) {
      const key = Object.keys(profileList[i])[0];
      if (ProfileTypes.includes(key)) {
        profile[key].push(profileList[i][key]);
      }
    }

    setProfiles(profile);
  };

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

  return {
    userProject,
    setUserProject,
    dsn,
    setDsn,
    selectedProject,
    profiles,
    setProfiles,
  };
}
