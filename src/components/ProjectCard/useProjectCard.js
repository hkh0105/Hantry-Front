import { useNavigate } from "react-router-dom";
import useProjectError from "../../hooks/useProjectError";

export default function useProjectCard(project) {
  const { errors } = useProjectError(project);
  const navigate = useNavigate();

  const navigateToDetailCard = event => {
    event.preventDefault();
    navigate(`/project_detail/${project.dsn}`);
  };

  return { errors, navigateToDetailCard };
}
