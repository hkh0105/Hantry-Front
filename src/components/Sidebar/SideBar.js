import React from "react";
import "./SideBar.scss";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();

  const navigateHandler = evnet => {
    event.preventDefault();
    const nonClick = document.getElementsByClassName("items");

    for (let i = 0; i < nonClick.length; i++) {
      nonClick[i].classList.remove("click");
    }

    event.target.classList.add("click");
    navigate(evnet.target.id);
  };

  return (
    <div className="side-container">
      <div id="/" className="side-items side-click" onClick={navigateHandler}>
        <img src={process.env.PUBLIC_URL + "/Vectorerror.png"} />
        Project
      </div>
      <div id="/error_list" className="side-items" onClick={navigateHandler}>
        <img src={process.env.PUBLIC_URL + "/Vectorfolder.png"} />
        Errors
      </div>
      <div
        id="/project_profile"
        className="side-items"
        onClick={navigateHandler}
      >
        <img src={process.env.PUBLIC_URL + "/Vectorfolder.png"} />
        Profiler
      </div>
      <div id="/Settings" className="side-items" onClick={navigateHandler}>
        <img src={process.env.PUBLIC_URL + "/Vectorgear.png"} />
        Settings
      </div>
    </div>
  );
}
