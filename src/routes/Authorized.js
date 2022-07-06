import { Routes, Route, Navigate } from "react-router-dom";

export default function Authorized() {
  return (
    <Routes>
      <Route path="/login" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
