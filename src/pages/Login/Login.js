import GoogleLogin from "../../components/GoogleLogin";
import "./Login.scss";
import useLogin from "./useLogin";

export default function Login() {
  useLogin();
  return (
    <div id="container" className="container">
      <div className="row">
        <div className="col align-items-center flex-col sign-up"></div>
        <div className="col align-items-center flex-col sign-in">
          <div className="form-wrapper align-items-center">
            <div className="form sign-in">
              <h1>HANTRY</h1>
              <div>
                <span>Simply Check for Errors!</span>
              </div>
              <div>
                <span>
                  에러를 손쉽게 잡을 수 있는 플랫폼입니다 지금 바로 시작하세요!
                </span>
              </div>
              <GoogleLogin style={{ width: "100%" }} />
            </div>
          </div>
          <div className="form-wrapper"></div>
        </div>
      </div>
      <div className="row content-row">
        <div className="col align-items-center flex-col">
          <div className="text sign-in">
            <div className="main-text">Welcome</div>
            <h2>HANTRY</h2>
          </div>
          <div className="img sign-in"></div>
        </div>
      </div>
    </div>
  );
}
