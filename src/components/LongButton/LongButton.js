import { useNavigate } from "react-router-dom";
import {
  createNewProject,
  updateProject,
  deleteProject,
  deleteSourceMap,
} from "../../utils/API";
import { useDispatch } from "react-redux";
import { onModal } from "../../store/modalSlice";
import "./LongButton.scss";

export default function LongButton({ url, description, project, dsn }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    if (description === "Delete Map") {
      await deleteSourceMap(dsn);
      navigate("/");
    }
    if (project && description === "Create") {
      await createNewProject(project);
      navigate("/");
    }
    if (project && description === "Update") {
      await updateProject(dsn, project);
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
