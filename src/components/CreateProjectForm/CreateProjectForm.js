import BasicInformationForm from "../BasicInformationForm/BasicInformationForm";
import AlarmSettingForm from "../AlarmSettingForm/AlarmSettingForm";
import Button from "../../userInfterface/Button/Button";

import useCreateProject from "./useCreateProject";

export default function CreateProjectForm() {
  const {
    name,
    alarmType,
    alarmNumber,
    email,
    alarm,
    onClickCreateButton,
    onChangeNameHandler,
    setAlarm,
    setPlatform,
    setAlarmType,
    setAlarmNumber,
    onSetEmail,
  } = useCreateProject();

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
      <Button description={"Create"} onClick={onClickCreateButton} />
    </>
  );
}
