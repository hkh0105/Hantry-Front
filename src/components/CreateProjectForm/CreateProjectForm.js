import BasicInformationForm from "../BasicInformationForm/BasicInformationForm";
import AlarmSettingForm from "../AlarmSettingForm/AlarmSettingForm";
import Button from "../../userInfterface/Button/Button";

import useCreateProject from "./useCreateProject";

import { AlarmTypeList, PlatFromList } from "../../constants";

export default function CreateProjectForm() {
  const {
    name,
    alarmType,
    email,
    alarm,
    onClickCreateButton,
    onChangeNameHandler,
    setAlarm,
    setPlatform,
    setAlarmType,
    onSetEmail,
  } = useCreateProject();

  const BasicInformationFormProps = {
    name,
    alarm,
    imageList: PlatFromList,
    onSelectImage: setPlatform,
    onChange: onChangeNameHandler,
    onClickOnOff: setAlarm,
  };

  const AlarmSettingFormProps = {
    alarmType,
    email,
    onDropdown: setAlarmType,
    onSetEmail,
    dropdownList: AlarmTypeList,
  };

  return (
    <>
      <BasicInformationForm {...BasicInformationFormProps} />
      {alarm && <AlarmSettingForm {...AlarmSettingFormProps} />}
      <Button description={"Create"} onClick={onClickCreateButton} />
    </>
  );
}
