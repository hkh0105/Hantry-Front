import "./BasicInformationForm.scss";

import BasicDataTableRow from "../BasicDataTableRow/BasicDataTableRow";
import Box from "../../userInfterface/Box/Box";
import TextInput from "../../userInfterface/TextInput/TextInput";
import SelectImageListRow from "../SelectImageListRow/SelectImageListRow";
import OnOffForm from "../OnOffForm/OnOffForm";

export default function BasicInformationForm({
  name,
  onChange,
  onClickOnOff,
  onSelectImage,
  alarm,
  imageList,
}) {
  const BoxProps = {
    subTitle: "Project Details",
  };

  const TextInputProps = {
    placeholder: name,
    defaultValue: "Project Name",
    onChange: onChange,
  };

  const NameBasicDataTableRowProps = {
    description: "A unique ID used to identify this project",
    name: "Name",
    children: <TextInput {...TextInputProps} />,
  };

  const SelectImageListRowProps = {
    title: "Platform",
    subTitle: "The primary platform for your project",
    selectList: imageList,
    onSelect: onSelectImage,
  };

  const OnOffFormProps = {
    status: alarm,
    onClick: onClickOnOff,
  };

  const AlarmBasicDataTableRowProps = {
    description: "Set your alarm setting",
    name: "Alarm",
    children: <OnOffForm {...OnOffFormProps} />,
  };

  return (
    <Box {...BoxProps}>
      <BasicDataTableRow {...NameBasicDataTableRowProps} />
      <SelectImageListRow {...SelectImageListRowProps} />
      <BasicDataTableRow {...AlarmBasicDataTableRowProps} />
    </Box>
  );
}
