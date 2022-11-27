import "./Box.scss";

export default function Box({ subTitle, children }) {
  return (
    <div className="info-form-container">
      <div className="form-sub-title">{subTitle}</div>
      {children}
    </div>
  );
}
