import React from "react";
import ModalPortal from "../../portal/ModalPortal";
import "./ModalFrame.scss";
import { useDispatch } from "react-redux";
import { offModal } from "../../store/modalSlice";

export default function ModalFrame({ children }) {
  const dispatch = useDispatch();

  return (
    <ModalPortal>
      <div className="modal-container" onClick={() => dispatch(offModal())}>
        <div className="modal-box" onClick={event => event.stopPropagation()}>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
}
