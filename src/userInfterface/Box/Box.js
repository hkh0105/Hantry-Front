import "./Box.scss";

export default function Box({ subTitle, children, color = "white" }) {
  return (
    <div className="info-form-container">
      <span
        className="bread-crumble-body-title"
        style={{
          color: color,
        }}
      >
        {subTitle}
      </span>
      {children}
    </div>
  );
}
