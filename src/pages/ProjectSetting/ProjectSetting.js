import useUserProject from "../../hooks/useUserProject";
// import SelectProject from "../../components/SelectProject/SelectProject";
import BasicInformationForm from "../../components/BasicInformationForm/BasicInformationForm";
import SettingButtonHandler from "../../components/SettingButtonHandler/SettingButtonHandler";
import useSetting from "../../hooks/useSetting";
import LongButton from "../../components/LongButton/LongButton";
import AddSlackBotButton from "../../components/AddSlackBotButton/AddSlackBotButton";
import FileUploadModal from "../../components/FileUploadModal/FileUploadModal";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Loadable from "../../components/Loadable/Loadable";
import Dropdown from "../../components/Dropdown/Dropdown";
import ConditionHandler from "../../components/ConditionHandler/ConditionHandler";
import { AlarmTypeList, PlatFromList } from "../../constants";
import SettingForm from "../../components/SettingForm/SettingForm";

export default function ProjectSetting() {
  const { dsn, selectedProject, setDsn, projectList } = useUserProject();
  const isUploadModal = useSelector(state => state.modal.uploadModalOn);
  const {
    onChangeNameHandler,
    setAlarm,
    alarm,
    setPlatform,
    name,
    alarmType,
    email,
    setAlarmType,
    onSetEmail,
    modifiedProject,
  } = useSetting({}, {}, selectedProject);

  const ConditionHandlerProps = {
    defaultDsn: projectList[0]?.dsn,
    onChangeDsn: setDsn,
    optionList: projectList,
    type: "settings",
  };

  const SettingFormProps = {
    alarm: alarm ?? false,
    alarmType,
    email,
    name: selectedProject?.name ?? name,
    imageList: PlatFromList,
    onSelectImage: setPlatform,
    onChangeName: onChangeNameHandler,
    onClickOnOff: setAlarm,
    onDropdown: setAlarmType,
    onSetEmail,
    dropdownList: AlarmTypeList,
  };

  const SettingButtonHandlerProps = {
    dsn,
    modifiedProject,
    sourceMap: selectedProject?.sourceMap,
    isUploadModal,
  };

  return (
    <>
      <Loadable isLoading={!selectedProject}>
        <ConditionHandler {...ConditionHandlerProps} />
        <SettingForm {...SettingFormProps} />
        <SettingButtonHandler {...SettingButtonHandlerProps} />
      </Loadable>
    </>
  );
}
