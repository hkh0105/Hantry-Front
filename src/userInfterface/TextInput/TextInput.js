import "./TextInput.scss";

export default function TextInput({ placeholder, defaultValue, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder ? placeholder : defaultValue}
      className="form-name-input"
      onChange={onChange}
    ></input>
  );
}
