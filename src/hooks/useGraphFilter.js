import { useState, useEffect } from "react";
import { parseErrorsPerType } from "../utils/parseErrors";

export default function useGraphFilter(allErrors) {
  const [graphData, setGraphData] = useState([
    { type: "init", count: 50 },
    { type: "initial", count: 35 },
  ]);

  useEffect(() => {
    setGraphData(parseErrorsPerType(allErrors));
  }, [allErrors]);

  const timeFilterButtonHandler = value => {
    if (value === "All") {
      setGraphData(parseErrorsPerType(allErrors));
    } else if (value === "24h") {
      const newErrors = allErrors.filter(
        error => error.createdAt && new Date(error.createdAt).getDay() == 0,
      );

      setGraphData(parseErrorsPerType(newErrors));
    } else if (value === "7d") {
      const newErrors = allErrors.filter(
        error => error.createdAt && new Date(error.createdAt).getDay() < 7,
      );

      setGraphData(parseErrorsPerType(newErrors));
    }
  };

  return { timeFilterButtonHandler, graphData };
}
