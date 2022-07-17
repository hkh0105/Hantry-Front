import { useNavigate } from "react-router-dom";
import { createNewProject, updateProject } from "../../utils/API";
import { useDispatch, useSelector } from "react-redux";
import { onModal } from "../../store/modalSlice";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import FileUploadModal from "../FileUploadModal/FileUploadModal";
import "./LongButton.scss";

export default function LongButton({ url, description, project, dsn }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isCreateModal = useSelector(state => state.modal.createConfirmModalOn);
  const isUploadModal = useSelector(state => state.modal.uploadModalOn);

  const buttonHandler = event => {
    event.preventDefault();

    if (url) {
      navigate(url);
    }
    if (description === "SourceMap") {
      dispatch(onModal("Upload"));
    }
    if (project && description === "Create") {
      console.log(project);
      createNewProject(project);
      navigate("/");
      // dispatch(onModal("Create"));
      //   description: "생성하시겠습니까?",
      //   handleCallback: createNewProject(project),
      // ConfirmModal({
      // });
    }
    if (project && description === "Update") {
      updateProject(dsn, project);
      // navigate("/");
    }
  };
  return (
    <>
      <button className="long-button" onClick={buttonHandler}>
        {description}
      </button>
    </>
  );
}
