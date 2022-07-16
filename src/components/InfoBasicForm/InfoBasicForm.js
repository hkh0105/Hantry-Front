export default function InfoBasicForm({ name, description }) {
  return (
    <div className="form-name">
      <div className="form-name-container">
        <p>{name}</p>
        <span>{description}</span>
      </div>
    </div>
  );
}
