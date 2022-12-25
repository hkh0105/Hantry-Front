import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onModal } from "../../store/modalSlice";
import "./LongButton.scss";
import { deleteProject, updateProject } from "../../api/project";
import { deleteSourceMap } from "../../api/sourceMap";

export default function LongButton({
  description,
  onClick,
  dsn,
  url,
  project,
}) {
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
