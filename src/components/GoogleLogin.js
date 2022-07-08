import { useEffect } from "react";
import { login } from "../utils/API";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveUserInfo } from "../store/userSlice";
import { setCookie } from "cookies-next";
import jwtDecode from "jwt-decode";

export default function GoogleLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async response => {
    const credential = response.credential;
    const profileObj = jwtDecode(credential);
    const { name, email } = profileObj;

    try {
      const data = await login({ name, email, credential });

      dispatch(saveUserInfo(data.data.user));
      setCookie("user", data.data.user);
      setCookie("token", data.data.accessToken);

      localStorage.setItem("isLoggedIn", "true");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
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
