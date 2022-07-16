import InfoContainer from "../InfoContainer/InfoContainer";
import InfoBasicForm from "../InfoBasicForm/InfoBasicForm";

export default function ProjectBaseInfo({ project }) {
  console.log(project);
  return (
    <div>
      <h1>Project Details</h1>
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
    </div>
  );
}
