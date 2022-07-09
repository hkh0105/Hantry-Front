import styles from "./CreateProjectForm.module.css";
import useSetting from "../../hooks/useSetting";
import AlarmSettingForm from "../AlarmSettingForm/AlarmSettingForm";
import { useNavigate } from "react-router-dom";
import { createNewProject } from "../../utils/API";

export default function CreateProjectForm({ setting, alarmSettings }) {
  const navigate = useNavigate();
  const {
    onChange,
    setAlarm,
    alarm,
    platform,
    setPlatform,
    inputValue,
    alarmType,
    alarmNumber,
    email,
    setAlarmType,
    setAlarmNumber,
    setEmail,
  } = useSetting(setting, alarmSettings);

  const createProjectHandler = async event => {
    event.preventDefault();
    const project = {
      name: inputValue,
      platform: "React",
      alarm: alarm,
      alarmSettings: {
        alarmType: alarmType,
        alarmNumber: alarmNumber,
        email: email,
      },
    };

    const r = await createNewProject(project);
    console.log(r);
    navigate("/");
  };

  return (
    <div className={styles.projectForm}>
      <div className={styles.formSubTitle}>PROJECT DETAILS</div>
      <div className={styles.formName}>
        <div className={styles.formNameContainer}>
          <p>Name</p>
          <span>A unique ID used to identify this project</span>
        </div>
        <input
          type="text"
          placeholder="Project Name"
          className={styles.formNameInput}
          onChange={onChange}
        ></input>
      </div>
      <div className={styles.selectPlatform}>
        <p>Platform</p>
        <span>
          The primary platform for this project, used only for aesthetics
        </span>
        <ul>
          <li>
            <img
              src={process.env.PUBLIC_URL + "logo192.png"}
              style={{ width: "80px", height: "80px" }}
            />
            <p>React</p>
          </li>
          <li>
            <img
              src={process.env.PUBLIC_URL + "jsLogo.png"}
              style={{ width: "80px", height: "80px" }}
            />
            <p>JavaScript </p>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "VueLogo.png"} />
            <p>Vue</p>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "AngularLogo.png"} />
            <p>Angular</p>
          </li>
        </ul>
      </div>
      {
        <div className={styles.sourceMapForm}>
          <div className={styles.formNameContainer}>
            <p>Alarm</p>
            <span>Set your alarm setting</span>
          </div>
          <div
            className={styles.sourcemapWrapper}
            onClick={() => {
              console.log(alarm);
              alarm ? setAlarm(false) : setAlarm(true);
            }}
          >
            <input type="checkbox" id={styles.switch} checked={alarm} />
            <label htmlFor="switch" className={styles.sourcemapSwitchLabel}>
              <span className={styles.sourcemapOnOffButton}></span>
            </label>
            <span>{alarm ? "on" : "off"}</span>
          </div>
        </div>
      }
      {alarm && (
        <AlarmSettingForm
          setAlarmType={setAlarmType}
          setAlarmNumber={setAlarmNumber}
          setEmail={setEmail}
        />
      )}
      <button onClick={createProjectHandler}>생성</button>
    </div>
  );
}
