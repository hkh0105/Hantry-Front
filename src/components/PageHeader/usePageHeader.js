import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function usePageHeader() {
  const [title, setTitle] = useState("");
  const [isMain, setIsMain] = useState(false);
  const location = useLocation();

  useEffect(() => {
    handleHeaderTitle(location.pathname);
    handleIsMain(location.pathname);
  }, [location]);

  const handleHeaderTitle = pathName => {
    const newTitle = pathName.replace("/", " ");
    console.log(newTitle);
    setTitle(newTitle);
  };

  const handleIsMain = pathName => {
    if (pathName === "/project") {
      setIsMain(true);
    } else {
      setIsMain(false);
    }
  };

  return { title, isMain };
}
