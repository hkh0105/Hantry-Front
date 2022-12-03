import { useEffect } from "react";

import useUserProject from "../../hooks/useUserProject";
import { ProfileTypesColumns } from "../../constants";

export default function useProjectProfile() {
  const {
    dsn,
    setDsn,
    profiles,
    projectList,
    getSelectedProject,
    selectedProject,
  } = useUserProject();

  const profileKeys = Object.keys(profiles).filter(
    columns => ProfileTypesColumns[columns],
  );

  useEffect(() => {
    getSelectedProject(dsn);
  }, [dsn]);

  return {
    dsn,
    setDsn,
    profiles,
    projectList,
    getSelectedProject,
    profileKeys,
  };
}
