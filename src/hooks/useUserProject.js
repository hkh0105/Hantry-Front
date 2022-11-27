import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { saveProject } from "../store/projectSlice";
import {
  getProjectListAction,
  getSelectedProjectAction,
} from "../store/thunkAction/projectAction";
import { getUserProjectList, getProjectDetails } from "../utils/API";
import { ProfileTypes } from "../constants";

export default function useUserProject(projectId) {
  const [dsn, setDsn] = useState(projectId);
  const [profiles, setProfiles] = useState({});
  const { projectList, selectedProject } = useSelector(state => state.project);
  const dispatch = useDispatch();

  useEffect(() => {
    getProjectProfiles();
  }, [selectedProject]);

  useEffect(() => {
    setDsn(projectList[0]?.dsn);
  }, [projectList]);

  const getUserProject = () => {
    dispatch(getProjectListAction());
  };

  const getSelectedProject = async dsn => {
    dispatch(getSelectedProjectAction(dsn));
  };

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

  return {
    getSelectedProject,
    getUserProject,
    setProfiles,
    projectList,
    dsn,
    setDsn,
    selectedProject,
    profiles,
  };
}
