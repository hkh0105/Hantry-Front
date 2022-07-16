import { useEffect, useState } from "react";
import { getAllErrors } from "../utils/API";

export default function useProjectError(project) {
  const [errors, setErrors] = useState([]);
  console.log("asd", project);
  useEffect(() => {
    getErrors();
  }, [project]);

  const getErrors = async () => {
    console.log(project);
    const errors = await getAllErrors(project.dsn);
    console.log(errors.data.allErrors);
    setErrors(errors.data.allErrors);
  };

  return { errors, setErrors };
}
