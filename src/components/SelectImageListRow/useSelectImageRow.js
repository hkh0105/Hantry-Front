import { useState } from "react";

export default function useSelectedImageRow(onSelect) {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const onClickImage = (event, element) => {
    event.preventDefault();

    setSelectedLanguage(element);
    onSelect(element);
  };

  return { selectedLanguage, onClickImage };
}
