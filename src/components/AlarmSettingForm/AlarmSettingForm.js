import "../BasicInformationForm/BasicInformationForm.scss";

import Box from "../../userInfterface/Box/Box";
import BasicDataTableRow from "../BasicDataTableRow/BasicDataTableRow";
import Dropdown from "../Dropdown/Dropdown";
import TextInput from "../TextInput/TextInput";

export default function AlarmSettingForm({
  email,
  onSetEmail,
  onDropdown,
  alarmType,
  dropdownList,
}) {
  const BoxProps = {
    subTitle: "Alarm Setting",
  };

  const DropdownProps = {
    optionList: dropdownList,
    defaultValue: alarmType,
    onChange: onDropdown,
  };

  const TypeBasicDataTableRowProps = {
    description: "Set Alarm Type",
    name: "Type",
    children: <Dropdown {...DropdownProps} />,
  };

  const TextInputProps = {
    placeholder: email,
    defaultValue: "Channel Id",
    onChange: onSetEmail,
  };

  const EmailBasicDataTableRowProps = {
    description: "Set Alarm Id",
    name: "Email/Slack",
    children: <TextInput {...TextInputProps} />,
  };

  return (
    <Box {...BoxProps}>
      <BasicDataTableRow {...TypeBasicDataTableRowProps} />
      <BasicDataTableRow {...EmailBasicDataTableRowProps} />
    </Box>
  );
}
