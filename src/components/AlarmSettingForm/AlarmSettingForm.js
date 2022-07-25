import "../CreateProjectForm/CreateProjectForm.scss";
import InfoContainer from "../InfoContainer/InfoContainer";
import InfoBasicForm from "../InfoBasicForm/InfoBasicForm";
import SelectBasicForm from "../SelectBasicForm/SelectBasicForm";
import InfoInputTag from "../InfoInputTag/InfoInputTag";
import { AlarmTypeList } from "../../utils/constants";

export default function AlarmSettingForm({
  alarmType,
  alarmNumber,
  email,
  setAlarmType,
  setAlarmNumber,
  onsetEmail,
}) {
  return (
    <>
      <InfoContainer subTitle={"Alarm Setting"}>
        <InfoBasicForm name={"Type"} description={"Set Alarm Type"}>
          <SelectBasicForm
            optionList={AlarmTypeList}
            defaultValue={alarmType}
            onChange={setAlarmType}
          ></SelectBasicForm>
        </InfoBasicForm>
        <InfoBasicForm name={"Email/Slack"} description={"Set Alarm Id"}>
          <InfoInputTag
            naem={email}
            defaultValue={"Channel Id"}
            onChange={onsetEmail}
          ></InfoInputTag>
        </InfoBasicForm>
      </InfoContainer>
    </>
  );
}
