import useUserProject from "../../hooks/useUserProject";
import SelectProject from "../../components/SelectProject/SelectProject";
import CreateProjectForm from "../../components/CreateProjectForm/CreateProjectForm";
import AlarmSettingForm from "../../components/AlarmSettingForm/AlarmSettingForm";
import useSetting from "../../hooks/useSetting";
import LongButton from "../../components/LongButton/LongButton";
import AddSlackBotButton from "../../components/AddSlackBotButton/AddSlackBotButton";
import FileUploadModal from "../../components/FileUploadModal/FileUploadModal";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import { updateProject } from "../../utils/API";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function ProjectSetting() {
  const { userProject, dsn, setDsn, selectedProject } = useUserProject();
  const isUploadModal = useSelector(state => state.modal.uploadModalOn);

  useEffect(() => {
    if (!selectedProject) return;
    setPlatform(selectedProject.platform);
    setAlarm(selectedProject.alarm);

    if (selectedProject.alarm) {
      setAlarmType(selectedProject.alaramSettings.alarmType);
      setAlarmNumber(selectedProject.alaramSettings.alarmNumber);
      setEmail(selectedProject.alaramSettings.email);
    }
  }, [selectedProject]);

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

  const newProject = {
    name: inputValue ? inputValue : selectedProject ? selectedProject.name : "",
    platform: platform,
    alarm: alarm ? alarm : false,
    alaramSettings: {
      alarmType: alarmType ? alarmType : "Email",
      alarmNumber: alarmNumber,
      email: email,
    },
  };

  return (
    <>
      <SelectProject setDsn={setDsn}></SelectProject>
      <CreateProjectForm
        name={selectedProject ? selectedProject.name : inputValue}
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
      <div>
        <LongButton
          description={"Update"}
          project={newProject}
          dsn={selectedProject ? selectedProject.dsn : ""}
        ></LongButton>
        <LongButton description={"SourceMap"}></LongButton>
        <AddSlackBotButton />
      </div>
      {isUploadModal && (
        <FileUploadModal
          dsn={selectedProject ? selectedProject.dsn : ""}
        ></FileUploadModal>
      )}
    </>
  );
}
