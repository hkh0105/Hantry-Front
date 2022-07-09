import { useState } from "react";
import useInput from "./useInput";

export default function useSetting(alarmSettings) {
  const [alarmType, setAlarmType] = useState(alarmSettings.alaramType);
  const [alarmNumber, setAlarmNumber] = useState(alarmSettings.alarmNumber);
  const [email, setEmail] = useState(alarmSettings.email);

  return {
    alarmType,
    alarmNumber,
    email,
    setAlarmType,
    setAlarmNumber,
    setEmail,
  };
}
