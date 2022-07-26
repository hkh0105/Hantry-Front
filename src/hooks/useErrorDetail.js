import { useState, useEffect } from "react";
import { getErrorDetail } from "../utils/API";

export default function useErrorDetail(errorId) {
  const [error, setError] = useState();

  useEffect(() => {
    (async function getError() {
      const errorDetail = await getErrorDetail(errorId);
      setError(errorDetail.data.error);
    })();
  }, []);

  return { setError, error };
}
