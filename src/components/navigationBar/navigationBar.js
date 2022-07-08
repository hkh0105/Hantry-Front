import React from "react";
import styles from "./navigationBar.module.css";
import Logout from "../Logout";

export default function navigationBar(props) {
  return (
    <ul className={styles.navbar}>
      <li className={styles.logo}>Hantry</li>
      <li className={styles.space}></li>
      <li className={styles.logout}>
        {props.authenticated ? <Logout /> : null}
      </li>
      <li className={styles.profileImg}>
        <img src={process.env.PUBLIC_URL + "UserProfile.png"}></img>
      </li>
    </ul>
  );
}
