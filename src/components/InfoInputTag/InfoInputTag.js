import "./InfoInputTag.scss";

export default function InfoInputTag({ name, defaultValue, onChange }) {
  return (
    <input
      type="text"
      placeholder={name ? name : defaultValue}
      className="form-name-input"
      onChange={onChange}
    ></input>
  );
}
