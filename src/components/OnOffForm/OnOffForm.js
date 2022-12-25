import "./OnOffForm.scss";

export default function OnOffForm({ status, onClick }) {
  const onOffButtonHandler = event => {
    event.preventDefault();

    onClick(!status);
  };

  return (
    <div className="onOff-form">
      <div className="onOff-wrapper" onClick={onOffButtonHandler}>
        <input type="checkbox" id="switch" checked={status} />
        <label htmlFor="switch" className="onOff-switch-label">
          <span className="onOff-button"></span>
        </label>
        <span>{status ? "on" : "off"}</span>
      </div>
    </div>
  );
}
