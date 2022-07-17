import "./CreateProjectForm.scss";
import useSetting from "../../hooks/useSetting";
import AlarmSettingForm from "../AlarmSettingForm/AlarmSettingForm";
import { useNavigate } from "react-router-dom";
import { createNewProject } from "../../utils/API";

export default function CreateProjectForm({
  name,
  onChange,
  setAlarm,
  setPlatform,
  alarm,
}) {
  const onSelectButtonHandler = event => {
    event.preventDefault();
    const nonClick = document.getElementsByClassName("unselect-items");

    for (let i = 0; i < nonClick.length; i++) {
      nonClick[i].classList.remove("select-itmes");
    }

    event.target.classList.add("select-itmes");
    setPlatform(event.currentTarget.id);
  };

  return (
    <div className="project-form">
      <div className="form-sub-title">PROJECT DETAILS</div>
      <div className="form-name">
        <div className="form-name-container">
          <p>Name</p>
          <span>A unique ID used to identify this project</span>
        </div>
        <input
          type="text"
          placeholder={name ? name : "Project Name"}
          className="form-name-input"
          value={name ? name : null}
          onChange={onChange}
        ></input>
      </div>
      <div className="select-platform">
        <p>Platform</p>
        <span>
          The primary platform for this project, used only for aesthetics
        </span>
        <ul>
          <li>
            <img
              className="unselect-items"
              src={process.env.PUBLIC_URL + "/logo192.png"}
              style={{ width: "80px", height: "80px" }}
              onClick={onSelectButtonHandler}
              id="React"
            />
            <p>React</p>
          </li>
          <li>
            <img
              className="unselect-items"
              src={process.env.PUBLIC_URL + "/jsLogo.png"}
              style={{ width: "80px", height: "80px" }}
              onClick={onSelectButtonHandler}
              id="JavaScript"
            />
            <p>JavaScript </p>
          </li>
          <li>
            <img
              className="unselect-items"
              src={process.env.PUBLIC_URL + "/VueLogo.png"}
              style={{ width: "80px", height: "80px" }}
              onClick={onSelectButtonHandler}
              id="Vue"
            />
            <p>Vue</p>
          </li>
          <li>
            <img
              className="unselect-items"
              src={process.env.PUBLIC_URL + "/AngularLogo.png"}
              style={{ width: "80px", height: "80px" }}
              onClick={onSelectButtonHandler}
              id="Angular"
            />
            <p>Angular</p>
          </li>
          <li>
            <img
              className="unselect-items"
              src={process.env.PUBLIC_URL + "/AngularLogo.png"}
              style={{ width: "80px", height: "80px" }}
              onClick={onSelectButtonHandler}
              id="Node"
            />
            <p>Node</p>
          </li>
        </ul>
      </div>
      {
        <div className="source-map-form">
          <div className="form-name-container">
            <p>Alarm</p>
            <span>Set your alarm setting</span>
          </div>
          <div className="source-map-wrapper" onClick={() => setAlarm(!alarm)}>
            <input type="checkbox" id="switch" checked={alarm} />
            <label htmlFor="switch" className="source-map-switch-label">
              <span className="source-map-onoff-button"></span>
            </label>
            <span>{alarm ? "on" : "off"}</span>
          </div>
        </div>
      }
    </div>
  );
}

CreateProjectForm.propTypes = {
  setting: {
    name: "",
    platform: "",
    alarm: false,
  },
};
