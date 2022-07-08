import { Routes, Route, Navigate } from "react-router-dom";
import CreateProject from "../pages/CreateProject/CreateProject";
import ProjectList from "../pages/ProjectList/ProjectList";
import SideBar from "../components/sidebar/sideBar";

export default function Authorized() {
  return (
    <>
      <SideBar />
      <div style={{ margin: "2% 3% 0 14%", height: "100%" }}>
        <Routes>
          <Route path="/login" element={<Navigate replace to="/" />} />
          <Route path="/create_project" element={<CreateProject />} />
          <Route path="/project_list" element={<ProjectList />} />
        </Routes>
      </div>
    </>
  );
}
