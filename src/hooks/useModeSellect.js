import { useState } from "react";

export default function useModeSellect(initialState) {
  const [mode, setMode] = useState(initialState);

  return { setMode, mode };
}
