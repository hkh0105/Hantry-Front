import { useEffect, useState } from "react";
import { getProjectErrors } from "../api/error";

export default function useProjectError(project) {
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    getErrors(project);
  }, [project]);

  const getErrors = async project => {
    const errors = await getProjectErrors(project.dsn);
    const projectErrors = errors.data.allErrors;
    setErrors(projectErrors);
  };

  return { errors, setErrors };
}
