import { Routes, Route, Navigate } from "react-router-dom";
import CreateProject from "../pages/CreateProject/CreateProject";
import Project from "../pages/Project/Project";
import SideBar from "../components/Sidebar/SideBar";
import ProjectDetail from "../pages/ProjectDetail/ProjectDetail";
import ErrorList from "../pages/ErrorList/ErrorList";
import ErrorDetail from "../pages/ErrorDetail/ErrorDetail";
import ProjectSetting from "../pages/ProjectSetting/ProjectSetting";
import ProjectProfile from "../pages/ProjectProfile/ProjectProfile";
import ProjectProfileDetail from "../pages/ProjectProfileDetail/ProjectProfileDetail";
import PageHeader from "../components/PageHeader/PageHeader";
import NavigationBar from "../components/NavigationBar/NavigationBar";

export default function Authorized() {
  return (
    <NavigationBar>
      <div>
        <SideBar />
        <div style={{ margin: "2% 3% 0 14%", height: "100%" }}>
          <PageHeader>
            <Routes>
              <Route path="/" element={<Navigate replace to="/project" />} />
              <Route path="/create_project" element={<CreateProject />} />
              <Route path="/login" element={<Navigate replace to="/" />} />
              <Route path="/project" element={<Project />} />
              <Route path="/project_detail/:dsn" element={<ProjectDetail />} />
              <Route path="/error_list" element={<ErrorList />} />
              <Route path="/error_detail/:errorId" element={<ErrorDetail />} />
              <Route path="/settings" element={<ProjectSetting />} />
              <Route path="/project_profile" element={<ProjectProfile />} />
              <Route
                path="/profile_detail/:type"
                element={<ProjectProfileDetail />}
              />
            </Routes>
          </PageHeader>
        </div>
      </div>
    </NavigationBar>
  );
}
