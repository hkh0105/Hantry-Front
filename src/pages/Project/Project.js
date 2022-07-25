import ProjectList from "../../components/ProjectList/ProjectList";
import LongButton from "../../components/LongButton/LongButton";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./Project.scss";

export default function Project() {
  return (
    <>
      <PageHeader title={"Project"}>
        <LongButton
          type={"navigation"}
          url={"/create_project"}
          description={"Create a new project"}
        ></LongButton>
      </PageHeader>
      <ProjectList />
    </>
  );
}
