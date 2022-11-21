import { useState, useEffect } from "react";

import {
  parseErrorsPerTime,
  parseErrorsPerType,
} from "../../utils/parseErrors";

export default function useLineGraph(data) {
  const [parsedData, setParsedData] = useState([]);

  useEffect(() => {
    setParsedData(parseErrorsPerTime(data));
  }, [data]);

  return { parsedData };
}
