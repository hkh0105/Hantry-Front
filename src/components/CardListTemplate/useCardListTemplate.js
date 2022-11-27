import { useEffect } from "react";

import useUserProject from "../../hooks/useUserProject";

export default function useCardListTemplate() {
  const { getUserProject, projectList } = useUserProject();

  useEffect(() => {
    getUserProject();
  }, []);

  return { getUserProject, projectList };
}
