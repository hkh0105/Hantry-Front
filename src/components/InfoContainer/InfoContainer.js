import "./InfoContainer.scss";

export default function InfoContainer({ subTitle, children }) {
  return (
    <div className="info-form-container">
      <div className="form-sub-title">{subTitle}</div>
      {children}
    </div>
  );
}
