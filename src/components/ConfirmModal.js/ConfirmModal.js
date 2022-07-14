import ModalFrame from "../ModalFrame/ModalFrame";
import styles from "./ConfirmModal.module.css";
import { useDispatch } from "react-redux";
import { offModal } from "../../store/modalSlice";
import { createNewProject } from "../../utils/API";

export default function CofirmModal({ form, text, handleCallback }) {
  const dispatch = useDispatch();
  return (
    <ModalFrame>
      <div className={styles.cofirmContainer}>
        {text}
        <div className={styles.buttonContainer}>
          <button onClick={handleCallback}>yes</button>
          <button onClick={dispatch(offModal())}>no</button>
        </div>
      </div>
    </ModalFrame>
  );
}
