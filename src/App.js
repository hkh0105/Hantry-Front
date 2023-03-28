import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUserInfo } from "./store/userSlice";
import { getCookie } from "cookies-next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Authorized from "./routes/Authorized";
import Unauthorized from "./routes/Unauthorized";

function App() {
  const dispatch = useDispatch();
  const queryClient = new QueryClient({
    defaultOptions: { queries: { suspense: true } },
  });
  const userInformation = useSelector(state => state.user.userInformation);
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
