import { useState, useEffect } from "react";
import { getUserProjectList } from "../utils/API";

export default function useSelectProject() {
  const [projects, setProjects] = useState("");
  const [selectedProject, setSelectedProject] = useState("");

  useEffect(() => {
    (async function getUserProject() {
      const projectList = await getUserProjectList();
      setProjects(projectList.data.userProject);
    })();
  }, []);

  const onClick = event => {
    setSelectedProject(event.target.value);
  };

  return { selectedProject, projects, onClick };
}
