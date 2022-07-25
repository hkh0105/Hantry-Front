import "./CardForm.scss";

export default function CardForm({
  onClick,
  title,
  children,
  subTitle,
  description,
}) {
  return (
    <div className="card-container">
      <div className="card" onClick={onClick}>
        <div className="title">{title}</div>
        <div className="chart-container">{children}</div>
        <h4 className="card-title">{subTitle}</h4>
        <p className="card-text ">{description}</p>
      </div>
    </div>
  );
}
