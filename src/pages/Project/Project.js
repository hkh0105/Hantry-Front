import ProjectList from "../../components/ProjectList/ProjectList";
import LongButton from "../../components/LongButton/LongButton";
import "./Project.scss";

export default function Project() {
  return (
    <>
      <div className="header">
        <h1>Projects</h1>
        <LongButton
          type={"navigation"}
          url={"/create_project"}
          description={"Create a new project"}
        ></LongButton>
      </div>
      <ProjectList />
    </>
  );
}
