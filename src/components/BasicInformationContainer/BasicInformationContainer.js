import Box from "../../userInfterface/Box/Box";
import BasicDataTableRow from "../BasicDataTableRow/BasicDataTableRow";

import useBasicInformation from "./useBasicInformation";
import Loadable from "../Loadable/Loadable";

export default function BasicInformationContainer({ dsn = "" }) {
  const { selectedProject } = useBasicInformation(dsn);
  const { name, platform, alarm } = selectedProject;

  const LoadableProps = {
    isLoading: !selectedProject,
  };

  const BoxProps = {
    subTitle: "Basic Info",
  };

  const NameBasicDataTableRowProps = {
    name: "Project Name",
    description: name,
  };

  const DsnBasicDataTableRowProps = {
    name: "DSN",
    description: dsn,
  };

  const PlatformBasicDataTableRowProps = {
    name: "Platform",
    description: platform,
  };

  const AlarmBasicDataTableRowProps = {
    name: "Alarm",
    description: alarm
      ? "This Project subscripbes to Alarm"
      : "This Project doesn't subscripbes to Alarm",
  };

  return (
    <Loadable {...LoadableProps}>
      <Box {...BoxProps}>
        <BasicDataTableRow {...NameBasicDataTableRowProps} />
        <BasicDataTableRow {...DsnBasicDataTableRowProps} />
        <BasicDataTableRow {...PlatformBasicDataTableRowProps} />
        <BasicDataTableRow {...AlarmBasicDataTableRowProps} />
      </Box>
    </Loadable>
  );
}
