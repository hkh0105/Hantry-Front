import { createPortal } from "react-dom";

export default function ModalPortal({ children }) {
  const modalRoot = document.getElementById("modal-root");
  return createPortal(children, modalRoot);
}
