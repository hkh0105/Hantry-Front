import Box from "../Box/Box";
import BasicDataTableRow from "../BasicDataTableRow/BasicDataTableRow";

import useBasicInformation from "./useBasicInformation";
import Loadable from "../Loadable/Loadable";

export default function BasicInformationContainer({ dsn = "" }) {
  const { selectedProject } = useBasicInformation(dsn);
  const { name, platform, alarm } = selectedProject;
  const alarmDescription = alarm
    ? "This Project subscripbes to Alarm"
    : "This Project doesn't subscripbes to Alarm";

  return (
    <Loadable isLoading={!selectedProject}>
      <Box subTitle={"Basic Info"}>
        <BasicDataTableRow
          name={"Project Name"}
          description={name}
        ></BasicDataTableRow>
        <BasicDataTableRow name={"DSN"} description={dsn}></BasicDataTableRow>
        <BasicDataTableRow
          name={"Platform"}
          description={platform}
        ></BasicDataTableRow>
        <BasicDataTableRow
          name={"IsAlarm"}
          description={alarmDescription}
        ></BasicDataTableRow>
      </Box>
    </Loadable>
  );
}
