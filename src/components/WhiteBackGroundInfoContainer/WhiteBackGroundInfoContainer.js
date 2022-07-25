import "./WhiteBackGroundInfoContainer.scss";

export default function WhiteBackGroundInfoContainer({ title, children }) {
  return (
    <div className="white-info-container">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
