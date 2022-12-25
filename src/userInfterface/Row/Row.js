import "./Row.scss";

export default function Row({ className, children }) {
  return <div className={className ?? "form-name"}>{children}</div>;
}
