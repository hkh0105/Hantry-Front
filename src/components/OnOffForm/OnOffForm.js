import "./OnOffForm.scss";

export default function OnOffForm({ name, onClick }) {
  const onOffButtonHandler = event => {
    event.preventDefault();
    event.stopPropagation();

    onClick(!name);
  };

  return (
    <div className="onOff-form">
      <div className="onOff-wrapper" onClick={onOffButtonHandler}>
        <input type="checkbox" id="switch" checked={name} />
        <label htmlFor="switch" className="onOff-switch-label">
          <span className="onOff-button"></span>
        </label>
        <span>{name ? "on" : "off"}</span>
      </div>
    </div>
  );
}
