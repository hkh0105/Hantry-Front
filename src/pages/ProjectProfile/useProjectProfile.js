import { useEffect } from "react";

import useUserProject from "../../hooks/useUserProject";
import { ProfileTypesColumns } from "../../constants";

export default function useProjectProfile() {
  const {
    dsn,
    setDsn,
    profile,
    projectList,
    getSelectedProject,
    selectedProject,
  } = useUserProject();

  const profileKeys = Object.keys(profile).filter(
    columns => ProfileTypesColumns[columns],
  );

  useEffect(() => {
    getSelectedProject(dsn);
  }, [dsn]);

  return {
    dsn,
    setDsn,
    profile,
    projectList,
    getSelectedProject,
    profileKeys,
  };
}
