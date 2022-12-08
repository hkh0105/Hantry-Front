import "./TabMenu.scss";
import { useState } from "react";

export default function TabMenu({
  menuOne,
  menuTwo,
  titleOne,
  titleTwo,
  onClick,
  mode,
}) {
  return (
    <>
      <div className="error-detail-tab-menu">
        <span
          id={menuOne}
          onClick={event => onClick(event.target.id)}
          className={
            mode === { menuOne }
              ? "error-detail-click-tab"
              : "error-detail-non-click-tab"
          }
        >
          {titleOne}
        </span>
        <span
          id={menuTwo}
          onClick={onClick}
          className={
            mode === { menuTwo }
              ? "error-detail-click-tab"
              : "error-detail-non-click-tab"
          }
        >
          {titleTwo}
        </span>
      </div>
    </>
  );
}
