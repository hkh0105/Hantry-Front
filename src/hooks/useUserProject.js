import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getProjectListAction,
  getSelectedProjectAction,
} from "../store/thunkAction/projectAction";
import { ProfileTypes } from "../constants";

export default function useUserProject(projectId) {
  const [dsn, setDsn] = useState(projectId);
  const { projectList, selectedProject, profile } = useSelector(
    state => state.project,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (projectList?.length) {
      setDsn(projectList[0]?.dsn);
    }
  }, [projectList]);

  const getUserProject = () => {
    dispatch(getProjectListAction());
  };

  const getSelectedProject = async dsn => {
    dispatch(getSelectedProjectAction(dsn));
  };

  return {
    getSelectedProject,
    getUserProject,
    projectList,
    dsn,
    setDsn,
    selectedProject,
    profile,
  };
}
