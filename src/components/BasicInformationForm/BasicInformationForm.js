import "./BasicInformationForm.scss";

import BasicDataTableRow from "../BasicDataTableRow/BasicDataTableRow";
import Box from "../Box/Box";
import TextInput from "../TextInput/TextInput";
import SelectImageListRow from "../SelectImageListRow/SelectImageListRow";
import OnOffForm from "../OnOffForm/OnOffForm";

import { PlatFromList } from "../../constants";

export default function BasicInformationForm({
  name,
  onChange,
  setAlarm,
  setPlatform,
  alarm,
}) {
  return (
    <>
      <Box subTitle="Project Details">
        <BasicDataTableRow
          description={"A unique ID used to identify this project"}
          name={"Name"}
        >
          <TextInput
            placeholder={name}
            defaultValue={"Project Name"}
            onChange={onChange}
          ></TextInput>
        </BasicDataTableRow>
        <SelectImageListRow
          title={"Platform"}
          selectList={PlatFromList}
          subTitle={"The primary platform for your project"}
          select={setPlatform}
        ></SelectImageListRow>
        <BasicDataTableRow
          description={"Set your alarm setting"}
          name={"Alarm"}
        >
          <OnOffForm name={alarm} onClick={setAlarm}></OnOffForm>
        </BasicDataTableRow>
      </Box>
    </>
  );
}

BasicInformationForm.propTypes = {
  setting: {
    name: "",
    platform: "",
    alarm: false,
  },
};
