import React from "react";
import ModalPortal from "../../portal/ModalPortal";
import styles from "./ModalFrame.module.css";
import { useDispatch } from "react-redux";
import { offModal } from "../../store/modalSlice";

export default function ModalFrame({ children }) {
  const dispatch = useDispatch();

  return (
    <ModalPortal>
      <div
        className={styles.modalContainer}
        onClick={() => dispatch(offModal())}
      >
        <div
          className={styles.modalBox}
          onClick={event => event.stopPropagation()}
        >
          {children}
          {/* <button
            className={styles.closeButton}
            onClick={() => dispatch(offModal())}
          >
            X
          </button> */}
        </div>
      </div>
    </ModalPortal>
  );
}
