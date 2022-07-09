import { useState } from "react";
import useInput from "./useInput";

export default function useSetting(setting, alarmSettings) {
  const [alarm, setAlarm] = useState(setting.alaram);
  const [platform, setPlatform] = useState(setting.platform);
  const { inputValue, onChange } = useInput(setting.name);
  const [alarmType, setAlarmType] = useState(alarmSettings.alaramType);
  const [alarmNumber, setAlarmNumber] = useState(alarmSettings.alarmNumber);
  const [email, setEmail] = useState(alarmSettings.email);

  return {
    onChange,
    setAlarm,
    alarm,
    platform,
    setPlatform,
    inputValue,
    alarmType,
    alarmNumber,
    email,
    setAlarmType,
    setAlarmNumber,
    setEmail,
  };
}
