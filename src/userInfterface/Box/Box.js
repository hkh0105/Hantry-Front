export default function Box({ className, children }) {
  return <div className={className ?? "form-name"}>{children}</div>;
}
