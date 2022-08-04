import React from "react";
import "./SideBar.scss";
import { useNavigate } from "react-router-dom";
import { BsGear, BsFolder2Open } from "react-icons/bs";
import { BiError, BiHighlight, BiStats } from "react-icons/bi";

export default function SideBar() {
  const navigate = useNavigate();

  const navigateHandler = evnet => {
    event.preventDefault();
    const nonClick = document.getElementsByClassName("side-items");

    for (let i = 0; i < nonClick.length; i++) {
      nonClick[i].classList.remove("side-click");
    }

    event.target.closest("div").classList.add("side-click");
    navigate(evnet.target.id);
  };

  return (
    <div className="side-container">
      <div id="/" className="side-items side-click" onClick={navigateHandler}>
        <BsFolder2Open />
        &nbsp;&nbsp;Project
      </div>
      <div id="/error_list" className="side-items" onClick={navigateHandler}>
        <BiError />
        &nbsp;&nbsp;Errors
      </div>
      <div
        id="/project_profile"
        className="side-items"
        onClick={navigateHandler}
      >
        <BiStats />
        &nbsp;&nbsp;Profiler
      </div>
      <div id="/Settings" className="side-items" onClick={navigateHandler}>
        <BsGear />
        &nbsp;&nbsp;Settings
      </div>
    </div>
  );
}
