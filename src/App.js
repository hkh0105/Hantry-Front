import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveUserInfo } from "./store/userSlice";
import { getCookie } from "cookies-next";
import Authorized from "./routes/Authorized";
import Unauthorized from "./routes/Unauthorized";

function App() {
  const dispatch = useDispatch();
  const userInformation = useSelector(state => state.user.userInformation);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    const setUserInformation = async () => {
      if (getCookie("user")) {
        dispatch(saveUserInfo(getCookie("user")));
      }
    };

    if (!userInformation && isLoggedIn) {
      setUserInformation();
    }
  }, [userInformation]);

  return (
    <>
      {isLoggedIn && userInformation && <Authorized />}
      {!isLoggedIn && <Unauthorized />}
    </>
  );
}

export default App;
