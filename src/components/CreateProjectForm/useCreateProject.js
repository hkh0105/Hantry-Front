import useSetting from "../../hooks/useSetting";
import { createNewProjectApi } from "../../api/project";

export default function useCreateProject() {
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
    onSetEmail,
  } = useSetting();

  const onClickCreateButton = async event => {
    const project = {
      name,
      platform,
      alarm,
      alaramSettings: {
        alarmType,
        alarmNumber,
        email,
      },
    };

    await createNewProjectApi(project);
    navigate("/");
  };

  return {
    name,
    alarmType,
    email,
    alarm,
    platform,
    onClickCreateButton,
    onChangeNameHandler,
    setAlarm,
    setPlatform,
    setAlarmType,
    onSetEmail,
  };
}
