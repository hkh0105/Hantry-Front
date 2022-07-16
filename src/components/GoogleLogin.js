import { useEffect } from "react";
import { login, getUserProjectList } from "../utils/API";
import { useDispatch } from "react-redux";
import { saveUserInfo } from "../store/userSlice";
import { setCookie } from "cookies-next";
import jwtDecode from "jwt-decode";

export default function GoogleLogin() {
  const dispatch = useDispatch();

  const handleLogin = async response => {
    const credential = response.credential;
    const profileObj = jwtDecode(credential);
    const { name, email } = profileObj;

    try {
      const data = await login({ name, email, credential });
      await localStorage.setItem("isLoggedIn", "true");
      dispatch(saveUserInfo(data.data.user));
      setCookie("user", data.data.user);
      setCookie("token", data.data.accessToken);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleLogin,
    });

    google.accounts.id.renderButton(document.getElementById("sign-in"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  }, []);

  return (
    <>
      <div id="sign-in"></div>
    </>
  );
}
