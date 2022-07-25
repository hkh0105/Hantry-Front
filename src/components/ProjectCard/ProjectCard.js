import { useNavigate } from "react-router-dom";
import LineGraph from "../LineGraph/LineGraph";
import useProjectError from "../../hooks/useProjectError";
import CardForm from "../CardForm/CardForm";

export default function ProjectCard({ project }) {
  const { errors } = useProjectError(project);
  const navigate = useNavigate();

  const projectCardButtonHandler = event => {
    event.preventDefault();
    navigate(`/project_detail/${project.dsn}`);
  };

  return (
    <>
      <CardForm
        onClick={projectCardButtonHandler}
        title={project.name}
        subTitle={project.platform}
        description={"If you want to see details, Click here!"}
      >
        <LineGraph errors={errors}></LineGraph>
      </CardForm>
    </>
  );
}
