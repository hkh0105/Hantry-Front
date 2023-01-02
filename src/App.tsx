import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveUserInfo } from "./store/userSlice";
import { getCookie } from "cookies-next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Authorized from "./routes/Authorized";
import Unauthorized from "./routes/Unauthorized";
import { useAppSelector } from "./store";

function App() {
  const dispatch = useDispatch();
  const queryClient = new QueryClient({
    defaultOptions: { queries: { suspense: true } },
  });
  const userInformation = useAppSelector(state => state.user.userInformation);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    if (!userInformation && isLoggedIn) {
      setUserInformation();
    }
  }, [userInformation, isLoggedIn]);

  const setUserInformation = async () => {
    if (getCookie("user")) {
      dispatch(saveUserInfo(getCookie("user")));
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      {isLoggedIn && userInformation ? <Authorized /> : <Unauthorized />}
    </QueryClientProvider>
  );
}

export default App;
