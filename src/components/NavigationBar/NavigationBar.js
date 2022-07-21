import React from "react";
import "./NavigationBar.scss";
import Logout from "../Logout/Logout";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();

  const navigateHandler = evnet => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <ul className="navbar">
      <li className="logo" onClick={navigateHandler}>
        <img
          className="logo-image"
          src={process.env.PUBLIC_URL + "/hantry2.jpg"}
        />
      </li>
      <li className="logout">{<Logout />}</li>
    </ul>
  );
}
