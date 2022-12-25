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
import NavigationBar from "../userInfterface/NavigationBar/NavigationBar";

import Wrapper from "../userInfterface/Wrapper/Wrapper";
import PageHeader from "../userInfterface/PageHeader/PageHeader";

export default function Authorized() {
  return (
    <>
      <NavigationBar />
      <SideBar />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Navigate replace to="/project" />} />
          <Route path="/login" element={<Navigate replace to="/" />} />
          <Route
            path="/project/create"
            element={
              <PageHeader title={"Create Project"}>
                <CreateProject />
              </PageHeader>
            }
          />
          <Route
            path="/project"
            element={
              <PageHeader
                title={"Project"}
                button={{
                  type: "navigation",
                  url: "/project/create",
                  description: "Create a new project",
                }}
              >
                <Project />
              </PageHeader>
            }
          />
          <Route
            path="/project/detail/:dsn"
            element={
              <PageHeader title={"Project Detail"}>
                <ProjectDetail />
              </PageHeader>
            }
          />
          <Route
            path="/error"
            element={
              <PageHeader title={"Error List"}>
                <ErrorList />
              </PageHeader>
            }
          />
          <Route
            path="/error/detail/:errorId"
            element={
              <PageHeader title={"Error Detail"}>
                <ErrorDetail />
              </PageHeader>
            }
          />
          <Route
            path="/settings"
            element={
              <PageHeader title={"Settings"}>
                <ProjectSetting />
              </PageHeader>
            }
          />
          <Route
            path="/project/profile"
            element={
              <PageHeader title={"Project Profile"}>
                <ProjectProfile />
              </PageHeader>
            }
          />
          <Route
            path="/profile/detail/:type"
            element={
              <PageHeader title={"Project Detail"}>
                <ProjectProfileDetail />
              </PageHeader>
            }
          />
        </Routes>
      </Wrapper>
    </>
  );
}
