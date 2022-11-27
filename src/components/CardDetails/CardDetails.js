import { Link } from "react-router-dom";
import "./CardDetails.scss";

export default function CardDetails({
  path,
  title,
  children,
  subTitle,
  description,
}) {
  return (
    <div className="card-container">
      <Link className="card-link" to={path}>
        <div className="card">
          <div className="title">{title}</div>
          <div className="chart-container">{children}</div>
          <h4 className="card-title">{subTitle}</h4>
          <p className="card-text ">{description}</p>
        </div>
      </Link>
    </div>
  );
}
