import AlarmSettingForm from "../AlarmSettingForm/AlarmSettingForm";
import BasicInformationForm from "../BasicInformationForm/BasicInformationForm";

export default function SettingForm({
  alarm,
  alarmType,
  email,
  name,
  imageList,
  onSelectImage,
  onChangeName,
  onClickOnOff,
  onDropdown,
  onSetEmail,
  dropdownList,
}) {
  const BasicInformationFormProps = {
    alarm,
    name,
    imageList,
    onSelectImage,
    onChangeName,
    onClickOnOff,
  };
  const AlarmSettingFormProps = {
    alarmType,
    email,
    onDropdown,
    onSetEmail,
    dropdownList,
  };

  return (
    <>
      <BasicInformationForm {...BasicInformationFormProps} />
      {alarm && <AlarmSettingForm {...AlarmSettingFormProps} />}
    </>
  );
}
