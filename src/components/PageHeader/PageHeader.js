import "./PageHeader.scss";

export default function PageHeader({ title, subTitle, children }) {
  return (
    <>
      <div className="header">
        <h1>{title}</h1>
        {children}
      </div>
      <div className="header-sub-title">
        {subTitle}&gt;{title}
      </div>
    </>
  );
}
