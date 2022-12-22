import "./InfoBox.scss";

export default function InfoBox({ title, description }) {
  return (
    <div className="error-detail-body-container">
      <span>{title}</span>
      <div> {description}</div>
    </div>
  );
}
