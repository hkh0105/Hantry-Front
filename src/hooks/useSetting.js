import { useState, useEffect } from "react";

export default function useSetting(
  setting = {
    name: "",
    platform: "",
    alarm: false,
  },
  alarmSettings = {
    alarmType: "Email",
    alarmNumber: 0,
    email: "",
  },
  selectedProject,
) {
  const [alarm, setAlarm] = useState(setting.alaram);
  const [platform, setPlatform] = useState(setting.platform);
  const [alarmType, setAlarmType] = useState(alarmSettings.alarmType);
  const [alarmNumber, setAlarmNumber] = useState(alarmSettings.alarmNumber);
  const [email, setEmail] = useState(alarmSettings.email);
  const [name, setName] = useState(setting.name);

  useEffect(() => {
    if (!selectedProject) return;

    setPlatform(selectedProject.platform);
    setAlarm(selectedProject.alarm);

    if (selectedProject.alarm) {
      setAlarmType(selectedProject.alaramSettings.alarmType);
      setAlarmNumber(selectedProject.alaramSettings.alarmNumber);
      setEmail(selectedProject.alaramSettings.email);
    }
  }, [selectedProject]);

  const modifiedProject = {
    name: name ? name : selectedProject ? selectedProject.name : "",
    platform: platform,
    alarm: alarm ? alarm : false,
    alaramSettings: {
      alarmType: alarmType ? alarmType : "Email",
      alarmNumber: alarmNumber,
      email: email,
    },
  };

  const onChangeNameHandler = event => {
    setName(event.target.value);
  };

  const onSetEmail = event => {
    setEmail(event.target.value);
  };

  return {
    onChangeNameHandler,
    setAlarm,
    alarm,
    platform,
    setPlatform,
    name,
    alarmType,
    alarmNumber,
    email,
    setAlarmType,
    setAlarmNumber,
    onSetEmail,
    setEmail,
    modifiedProject,
  };
}
