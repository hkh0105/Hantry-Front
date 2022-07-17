import CreateProjectForm from "../../components/CreateProjectForm/CreateProjectForm";
import AlarmSettingForm from "../../components/AlarmSettingForm/AlarmSettingForm";
import useSetting from "../../hooks/useSetting";
import LongButton from "../../components/LongButton/LongButton";

export default function CreateProject() {
  const {
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
  } = useSetting();

  const project = {
    name: inputValue,
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
      <CreateProjectForm
        name={inputValue}
        setPlatform={setPlatform}
        onChange={onChange}
        setAlarm={setAlarm}
        alarm={alarm}
      ></CreateProjectForm>
      {alarm && (
        <AlarmSettingForm
          alarmType={alarmType}
          alarmNumber={alarmNumber}
          email={email}
          setAlarmType={setAlarmType}
          setAlarmNumber={setAlarmNumber}
          setEmail={setEmail}
        ></AlarmSettingForm>
      )}
      <LongButton project={project} description={"Create"}></LongButton>
    </>
  );
}
