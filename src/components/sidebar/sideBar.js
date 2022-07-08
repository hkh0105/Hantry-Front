import React from "react";
import styles from "./sideBar.module.css";

export default function sideBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.items}>
        <img src={process.env.PUBLIC_URL + "Vectorerror.png"} />
        Project
      </div>
      <div className={styles.items}>
        <img src={process.env.PUBLIC_URL + "Vectorfolder.png"} />
        Errors
      </div>
      <div className={styles.items}>
        <img src={process.env.PUBLIC_URL + "Vectorgear.png"} />
        Settings
      </div>
    </div>
  );
}
