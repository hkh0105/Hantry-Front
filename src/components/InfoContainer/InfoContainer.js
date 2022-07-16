export default function InfoContainer({ subTitle, children }) {
  return (
    <div className="project-form">
      <div className="form-sub-title">{subTitle}</div>
      {children}
    </div>
  );
}
