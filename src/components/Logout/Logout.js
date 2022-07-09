import { removeCookies } from "cookies-next";
import { useDispatch } from "react-redux";
import { saveUserInfo } from "../../store/userSlice";

export default function Logout() {
  const dispatch = useDispatch();

  const logout = event => {
    event.preventDefault();

    localStorage.removeItem("isLoggedIn");
    removeCookies("user");
    removeCookies("token");
    dispatch(saveUserInfo(null));
  };
  return (
    <>
      <button onClick={logout}>Logout</button>
    </>
  );
}
