import "./NavigationBar.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

import Logout from "../Logout/Logout";
import { IMAGES } from "../../constants/images";

export default function NavigationBar() {
  const navigate = useNavigate();

  const navigateHandler = evnet => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <ul className="navbar">
      <li className="logo" onClick={navigateHandler}>
        <img className="logo-image" src={IMAGES.logo} />
      </li>
      <li className="logout">{<Logout />}</li>
    </ul>
  );
}
