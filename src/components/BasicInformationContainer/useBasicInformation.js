import { useEffect } from "react";

import useUserProject from "../../hooks/useUserProject";

export default function useBasicInformation(dsn) {
  const { getSelectedProject, selectedProject } = useUserProject(dsn);

  useEffect(() => {
    getSelectedProject(dsn);
  }, []);

  return { selectedProject };
}
