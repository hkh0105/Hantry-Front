import { useState, useEffect } from "react";
import { getProjectErrors, getAllErrors } from "../../utils/API";
import { useSelector } from "react-redux";
import SelectProject from "../../components/SelectProject/SelectProject";
import CreateProjectForm from "../../components/CreateProjectForm/CreateProjectForm";

export default function ProjectSetting() {
  const projects = useSelector(state => state.project.projects);
  const [dsn, setDsn] = useState(projects[0].dsn);
  const selectedProject = projects.find(project => project.dsn === dsn);
  console.log(selectedProject);
  const alarmSettings = selectedProject.alaramSettings || {
    alarmType: "Email",
    alarmNumber: "1",
    email: "",
  };
  const setting = {
    name: selectedProject.name || "",
    platform: selectedProject.platform || "",
    alarm: selectedProject.alarm || false,
  };

  return (
    <>
      <SelectProject setDsn={setDsn} projects></SelectProject>
      <CreateProjectForm
        alarmSettings={alarmSettings}
        setting={setting}
      ></CreateProjectForm>
    </>
  );
}
