import { useState } from "react";
import CreateProjectForm from "../../components/CreateProjectForm/CreateProjectForm";

export default function CreateProject() {
  const alarmSettings = {
    alarmType: "Email",
    alarmNumber: "1",
    email: "",
  };

  const setting = {
    name: "",
    platform: "",
    alarm: false,
  };

  return (
    <>
      <CreateProjectForm
        alarmSettings={alarmSettings}
        setting={setting}
      ></CreateProjectForm>
    </>
  );
}
