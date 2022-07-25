import InfoContainer from "../InfoContainer/InfoContainer";
import InfoBasicForm from "../InfoBasicForm/InfoBasicForm";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function ProjectBaseInfo({ project }) {
  return (
    <>
      <InfoContainer subTitle={"Basic Info"}>
        <InfoBasicForm
          name={"Project Name"}
          description={project.name}
        ></InfoBasicForm>
        <InfoBasicForm name={"DSN"} description={project.dsn}></InfoBasicForm>
        <InfoBasicForm
          name={"Platform"}
          description={project.platform}
        ></InfoBasicForm>
        <InfoBasicForm
          name={"IsAlarm"}
          description={
            project.alarm
              ? "This Project subscripbes to Alarm"
              : "This Project doesn't subscripbes to Alarm"
          }
        ></InfoBasicForm>
      </InfoContainer>
    </>
  );
}
