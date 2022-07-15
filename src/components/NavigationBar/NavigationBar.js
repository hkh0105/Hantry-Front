import React from "react";
import styles from "./NavigationBar.module.css";
import Logout from "../Logout/Logout";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();

  const navigateHandler = evnet => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <ul className={styles.navbar}>
      <li className={styles.logo} onClick={navigateHandler}>
        Hantry
      </li>
      <li className={styles.logout}>{<Logout />}</li>
    </ul>
  );
}
