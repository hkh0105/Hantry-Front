import "./BasicDataTableRow.scss";

export default function BasicDataTableRow({ name, description, children }) {
  return (
    <div className="form-name">
      <div className="form-name-container">
        <p>{name}</p>
        <span>{description}</span>
      </div>
      {children}
    </div>
  );
}
