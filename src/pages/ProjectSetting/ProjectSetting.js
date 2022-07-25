import useUserProject from "../../hooks/useUserProject";
import SelectProject from "../../components/SelectProject/SelectProject";
import CreateProjectForm from "../../components/CreateProjectForm/CreateProjectForm";
import AlarmSettingForm from "../../components/AlarmSettingForm/AlarmSettingForm";
import useSetting from "../../hooks/useSetting";
import LongButton from "../../components/LongButton/LongButton";
import AddSlackBotButton from "../../components/AddSlackBotButton/AddSlackBotButton";
import FileUploadModal from "../../components/FileUploadModal/FileUploadModal";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";

export default function ProjectSetting() {
  const [isLoading, setIsLoading] = useState(true);
  const { dsn, setDsn, selectedProject } = useUserProject();
  const isUploadModal = useSelector(state => state.modal.uploadModalOn);

  useEffect(() => {
    console.log(selectedProject);
    setIsLoading(true);
    if (!selectedProject) return;
    setPlatform(selectedProject.platform);
    setAlarm(selectedProject.alarm);

    if (selectedProject.alarm) {
      setAlarmType(selectedProject.alaramSettings.alarmType);
      setAlarmNumber(selectedProject.alaramSettings.alarmNumber);
      setEmail(selectedProject.alaramSettings.email);
    }

    setIsLoading(false);
  }, [selectedProject]);

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
    setEmail,
  } = useSetting();

  const newProject = {
    name: name ? name : selectedProject ? selectedProject.name : "",
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
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <div className="space"></div>
          <SelectProject setDsn={setDsn}></SelectProject>
          <CreateProjectForm
            name={selectedProject ? selectedProject.name : name}
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
              onsetEmail={onsetEmail}
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
            <LongButton description={"Delete"} dsn={dsn}></LongButton>
            {selectedProject && selectedProject.sourceMap && (
              <LongButton description={"Delete Map"} dsn={dsn}></LongButton>
            )}
          </div>
        </>
      )}
      {isUploadModal && (
        <FileUploadModal
          dsn={selectedProject ? selectedProject.dsn : ""}
        ></FileUploadModal>
      )}
    </>
  );
}
