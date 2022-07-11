import { Routes, Route, Navigate } from "react-router-dom";
import CreateProject from "../pages/CreateProject/CreateProject";
import ProjectList from "../pages/ProjectList/ProjectList";
import Main from "../pages/Main/Main";
import SideBar from "../components/Sidebar/SideBar";
import ProjectDetail from "../pages/ProjectDetail/ProjectDetail";
import ErrorList from "../pages/ErrorList/ErrorList";
import ErrorDetail from "../pages/ErrorDetail/ErrorDetail";

export default function Authorized() {
  return (
    <>
      <SideBar />
      <div style={{ margin: "2% 3% 0 14%", height: "100%" }}>
        <Routes>
          <Route path="/login" element={<Navigate replace to="/" />} />
          <Route path="/create_project" element={<CreateProject />} />
          <Route path="/" element={<Main />} />
          <Route path="/project_list" element={<ProjectList />} />
          <Route path="/project_detail/:dsn" element={<ProjectDetail />} />
          <Route path="/error_list" element={<ErrorList />} />
          <Route path="/error_detail/:errorId" element={<ErrorDetail />} />
        </Routes>
      </div>
    </>
  );
}
