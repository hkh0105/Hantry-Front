import BasicInformationForm from "../BasicInformationForm/BasicInformationForm";
import AlarmSettingForm from "../AlarmSettingForm/AlarmSettingForm";
import LongButton from "../LongButton/LongButton";

import useSetting from "../../hooks/useSetting";

export default function CreateProjectForm() {
  const {
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
  } = useSetting();

  const project = {
    name: name,
    platform: platform,
    alarm: alarm,
    alaramSettings: {
      alarmType: alarmType,
      alarmNumber: alarmNumber,
      email: email,
    },
  };

  return (
    <>
      <BasicInformationForm
        name={name}
        setPlatform={setPlatform}
        onChange={onChangeNameHandler}
        setAlarm={setAlarm}
        alarm={alarm}
      />
      {alarm && (
        <AlarmSettingForm
          alarmType={alarmType}
          alarmNumber={alarmNumber}
          email={email}
          setAlarmType={setAlarmType}
          setAlarmNumber={setAlarmNumber}
          onSetEmail={onSetEmail}
        />
      )}
      <LongButton project={project} description={"Create"} />
    </>
  );
}
