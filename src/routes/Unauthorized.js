import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";

export default function Unauthorized() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
