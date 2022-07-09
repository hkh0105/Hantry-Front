import styles from "./AlarmSettingForm.module.css";
import formStyles from "../CreateProjectForm/CreateProjectForm.module.css";

export default function AlarmSettingForm({
  setAlarmType,
  setAlarmNumber,
  setEmail,
}) {
  return (
    <div className={styles.alarmForm}>
      <div className={formStyles.formSubTitle}>ALERT SETTING</div>
      <div className={styles.formName}>
        <div className={styles.formNameContainer}>
          <p>Type</p>
        </div>
        <select
          name="type"
          className={styles.formNameInput}
          onChange={setAlarmType}
        >
          <option value="Email">Email</option>
          <option value="Slack">Slack</option>
        </select>
      </div>
      <div className={styles.formName}>
        <div className={styles.formNameContainer}>
          <p>Count</p>
        </div>
        <input
          type="number"
          placeholder="Sends an alarm for every set number of errors"
          defaultValue={1}
          className={styles.formNameInput}
          onChange={setAlarmNumber}
        ></input>
      </div>
      <div className={styles.formName}>
        <div className={styles.formNameContainer}>
          <p>Email/Slack ID</p>
        </div>
        <input
          type="text"
          placeholder="Email/Slack ID"
          className={styles.formNameInput}
          onChange={setEmail}
        ></input>
      </div>
    </div>
  );
}
