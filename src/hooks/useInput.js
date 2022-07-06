import { useState } from "react";

export default function useInput(initialPlace) {
  const [inputValue, setInputValue] = useState(initialPlace);

  const onChange = event => {
    setInputValue(event.target.value);
  };

  return { inputValue, onChange };
}
