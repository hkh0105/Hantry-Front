import LineGraph from "../LineGraph/LineGraph";
import CardForm from "../CardForm/CardForm";

import useProjectCard from "./useProjectCard";

export default function ProjectCard({ project }) {
  const { errors, navigateToDetailCard } = useProjectCard(project);

  return (
    <>
      <CardForm
        onClick={navigateToDetailCard}
        title={project.name}
        subTitle={project.platform}
        description={"If you want to see details, Click here!"}
      >
        <LineGraph data={errors}></LineGraph>
      </CardForm>
    </>
  );
}
