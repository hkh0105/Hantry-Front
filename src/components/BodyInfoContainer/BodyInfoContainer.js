import "./BodyInfoContainer.scss";

export default function BodyInfoContainer({ title, description }) {
  return (
    <div className="error-detail-body-container">
      <span>{title}</span>
      <div> {description}</div>
    </div>
  );
}
