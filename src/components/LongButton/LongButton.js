import { useNavigate } from "react-router-dom";
import {
  createNewProject,
  updateProject,
  deleteProject,
} from "../../utils/API";
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

  const buttonHandler = async event => {
    event.preventDefault();

    if (url) {
      navigate(url);
    }
    if (description === "SourceMap") {
      dispatch(onModal("Upload"));
    }
    if (description === "Delete") {
      await deleteProject(dsn);
      navigate("/");
    }
    if (project && description === "Create") {
      await createNewProject(project);
      navigate("/");
    }
    if (project && description === "Update") {
      console.log(project);
      updateProject(dsn, project);
      navigate("/");
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
