import React from "react";
import styles from "./ErrorLog.module.css";

export default function ErroLog({ error }) {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.firstLine}>
          <div className={styles.light}></div>
          <img src={process.env.PUBLIC_URL + "/checkcheck.png"} />
          <div className={styles.type}>{error.type}</div>
          <div className={styles.place}>
            {error.location &&
              error.source &&
              error.source + error.location.lineno + "," + error.location.colno}
          </div>
        </div>
        <p className={styles.detail}>{error.message}</p>
        <div className={styles.lastLine}>
          <span className={styles.who}>
            <img
              src={process.env.PUBLIC_URL + "/jotreactlogo.png"}
              style={{ width: "16px", height: "16px" }}
            />
            {error.user && <span>{error.user.ua}</span>}
          </span>
          <span>
            <img src={process.env.PUBLIC_URL + "/timeisrunningout.png"} />
            <span>{error.createdAt}</span>
          </span>
        </div>
      </div>
    </>
  );
}
