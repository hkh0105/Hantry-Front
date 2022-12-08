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
        error =>
          error.createdAt &&
          getTimeDiff(new Date(), new Date(error.createdAt)) == 0,
      );

      setGraphData(parseErrorsPerType(newErrors));
    } else if (value === "7d") {
      const newErrors = allErrors.filter(
        error =>
          error.createdAt &&
          getTimeDiff(new Date(), new Date(error.createdAt)) < 7,
      );

      setGraphData(parseErrorsPerType(newErrors));
    }
  };

  return { timeFilterButtonHandler, graphData };
}

const getTimeDiff = (day1, day2) => {
  const timeDiff = day1.getTime() - day2.getTime();
  const dayDiff = timeDiff / (1000 * 60 * 60 * 25);

  return dayDiff;
};
