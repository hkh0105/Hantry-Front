import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveUserInfo } from "./store/userSlice";
import { getCookie } from "cookies-next";
import { saveProject } from "./store/projectSlice";
import { getUserProjectList } from "./utils/API";
import NavigationBar from "./components/NavigationBar/NavigationBar";
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

    (async function getUserProject() {
      const projectList = await getUserProjectList();
      dispatch(saveProject(projectList.data.userProject));
    })();
  }, [userInformation]);

  return (
    <>
      {isLoggedIn && userInformation && <NavigationBar />}
      <div style={{ paddingTop: "70px" }}>
        {isLoggedIn && userInformation && <Authorized />}
        {!isLoggedIn && <Unauthorized />}
      </div>
    </>
  );
}

export default App;
