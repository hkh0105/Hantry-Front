import { useState } from "react";
import useInput from "./useInput";

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
) {
  const [alarm, setAlarm] = useState(setting.alaram);
  const [platform, setPlatform] = useState(setting.platform);
  const [alarmType, setAlarmType] = useState(alarmSettings.alarmType);
  const [alarmNumber, setAlarmNumber] = useState(alarmSettings.alarmNumber);
  const [email, setEmail] = useState(alarmSettings.email);
  const [name, setName] = useState(setting.name);

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
  };
}
