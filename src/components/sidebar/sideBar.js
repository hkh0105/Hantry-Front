import React from "react";
import styles from "./SideBar.module.css";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();

  const navigateHandler = evnet => {
    event.preventDefault();
    navigate(evnet.target.id);
  };

  return (
    <div className={styles.bar}>
      <div id="/" className={styles.items} onClick={navigateHandler}>
        <img src={process.env.PUBLIC_URL + "/Vectorerror.png"} />
        Project
      </div>
      <div id="/error_list" className={styles.items} onClick={navigateHandler}>
        <img src={process.env.PUBLIC_URL + "/Vectorfolder.png"} />
        Errors
      </div>
      <div
        id="/project_profile"
        className={styles.items}
        onClick={navigateHandler}
      >
        <img src={process.env.PUBLIC_URL + "/Vectorfolder.png"} />
        Profiler
      </div>
      <div id="/Settings" className={styles.items} onClick={navigateHandler}>
        <img src={process.env.PUBLIC_URL + "/Vectorgear.png"} />
        Settings
      </div>
    </div>
  );
}
