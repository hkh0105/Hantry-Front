import "./WhiteWrapper.scss";

export default function WhiteWrapper({ title, children }) {
  return (
    <div className="white-info-container">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
