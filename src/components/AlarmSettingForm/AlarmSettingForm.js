import "../BasicInformationForm/BasicInformationForm.scss";

import Box from "../Box/Box";
import BasicDataTableRow from "../BasicDataTableRow/BasicDataTableRow";
import Dropdown from "../Dropdown/Dropdown";
import TextInput from "../TextInput/TextInput";

import { AlarmTypeList } from "../../constants";

export default function AlarmSettingForm({
  alarmType,
  email,
  setAlarmType,
  onSetEmail,
}) {
  return (
    <>
      <Box subTitle={"Alarm Setting"}>
        <BasicDataTableRow name={"Type"} description={"Set Alarm Type"}>
          <Dropdown
            optionList={AlarmTypeList}
            defaultValue={alarmType}
            onChange={setAlarmType}
          />
        </BasicDataTableRow>
        <BasicDataTableRow name={"Email/Slack"} description={"Set Alarm Id"}>
          <TextInput
            placeholder={email}
            defaultValue={"Channel Id"}
            onChange={onSetEmail}
          />
        </BasicDataTableRow>
      </Box>
    </>
  );
}
