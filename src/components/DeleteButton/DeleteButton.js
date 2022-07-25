import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProject } from "../../utils/API";

export default function DeleteButton({ dsn }) {
  const navigate = useNavigate();

  const deleteHandler = async evnet => {
    event.preventDefault();
    const r = await deleteProject(dsn);
    navigate("/");
  };

  return <button onClick={deleteHandler}>X</button>;
}
