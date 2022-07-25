import { useEffect, useState } from "react";
import { getAllErrors } from "../utils/API";

export default function useProjectError(project) {
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    getErrors();
  }, [project]);

  const getErrors = async () => {
    const errors = await getAllErrors(project.dsn);
    setErrors(errors.data.allErrors);
  };

  return { errors, setErrors };
}
