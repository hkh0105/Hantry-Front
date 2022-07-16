import "../CreateProjectForm/CreateProjectForm.scss";

export default function AlarmSettingForm({
  alarmType,
  alarmNumber,
  email,
  setAlarmType,
  setAlarmNumber,
  setEmail,
}) {
  return (
    <div className="alarm-form">
      <div className="form-sub-title">ALERT SETTING</div>
      <div className="form-name">
        <div className="form-name-container">
          <p>Type</p>
        </div>
        <select
          name="type"
          className="form-name-input"
          defaultValue={alarmType}
          onChange={event => setAlarmType(event.target.value)}
        >
          <option value="Email">Email</option>
          <option value="Slack">Slack</option>
        </select>
      </div>
      <div className="form-name">
        <div className="form-name-container">
          <p>Count</p>
        </div>
        <input
          type="number"
          placeholder="Sends an alarm for every set number of errors"
          defaultValue={alarmNumber}
          className="form-name-input"
          onChange={event => setAlarmNumber(event.target.value)}
        ></input>
      </div>
      <div className="source-map-form">
        <div className="form-name-container">
          <p>Email/Slack ID</p>
        </div>
        <input
          type="text"
          placeholder="Email/Slack ID"
          className="form-name-input"
          defaultValue={email}
          onChange={event => setEmail(event.target.value)}
        ></input>
      </div>
    </div>
  );
}
