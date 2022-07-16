import ModalFrame from "../ModalFrame/ModalFrame";
import styles from "./ConfirmModal.module.css";
import { useDispatch } from "react-redux";
import { offModal } from "../../store/modalSlice";
import { createNewProject } from "../../utils/API";

export default function ConfirmModal({ form, description, handleCallback }) {
  const dispatch = useDispatch();
  return (
    // <ModalFrame>
    <div className={styles.cofirmContainer}>
      {description}
      <div className={styles.buttonContainer}>
        <button onClick={handleCallback}>yes</button>
        <button onClick={dispatch(offModal())}>no</button>
      </div>
    </div>
    // </ModalFrame>
  );
}
