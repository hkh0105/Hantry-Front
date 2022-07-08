import { Outlet } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin";

export default function Login() {
  return (
    <div>
      <GoogleLogin />
      <Outlet />
    </div>
  );
}
