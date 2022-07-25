import CreateProjectForm from "../../components/CreateProjectForm/CreateProjectForm";
import AlarmSettingForm from "../../components/AlarmSettingForm/AlarmSettingForm";
import useSetting from "../../hooks/useSetting";
import LongButton from "../../components/LongButton/LongButton";

export default function CreateProject() {
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
    onsetEmail,
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
      <CreateProjectForm
        name={name}
        setPlatform={setPlatform}
        onChange={onChangeNameHandler}
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
          setEmail={onsetEmail}
        ></AlarmSettingForm>
      )}
      <LongButton project={project} description={"Create"}></LongButton>
    </>
  );
}
