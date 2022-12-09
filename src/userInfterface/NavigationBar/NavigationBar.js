import "./NavigationBar.scss";
import React from "react";
import { Link } from "react-router-dom";

import Logout from "../../components/Logout/Logout";
import { IMAGES } from "../../constants/images";

export default function NavigationBar() {
  return (
    <ul className="navbar">
      <Link to={"/"} className="logo">
        <img className="logo-image" src={IMAGES.logo} />
      </Link>
      <li className="logout">{<Logout />}</li>
    </ul>
  );
}
