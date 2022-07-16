import { useNavigate } from "react-router-dom";
import { createNewProject } from "../../utils/API";
import { useDispatch, useSelector } from "react-redux";
import { onModal } from "../../store/modalSlice";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import "./LongButton.scss";

export default function LongButton({ url, description, project }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isModal = useSelector(state => state.modal.createConfirmModalOn);

  const buttonHandler = event => {
    event.preventDefault();

    if (url) {
      navigate(url);
    }
    if (project) {
      console.log(project);
      createNewProject(project);
      navigate("/");
      // dispatch(onModal("Create"));
      //   description: "생성하시겠습니까?",
      //   handleCallback: createNewProject(project),
      // ConfirmModal({
      // });
    }
  };
  return (
    <>
      {isModal && (
        <ConfirmModal
          description={"생성하시겠습니까?"}
          handleCallback={createNewProject(project)}
        ></ConfirmModal>
      )}
      <button className="long-button" onClick={buttonHandler}>
        {description}
      </button>
    </>
  );
}
