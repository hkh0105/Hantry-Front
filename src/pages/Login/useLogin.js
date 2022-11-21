import { useEffect } from "react";

export default function useLogin() {
  useEffect(() => {
    setTimeout(() => {
      container.classList.add("sign-in");
    }, 200);
  }, []);
}
