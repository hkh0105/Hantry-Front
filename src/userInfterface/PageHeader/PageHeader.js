import "./PageHeader.scss";

import LongButton from "../../components/LongButton/LongButton";

export default function PageHeader({ title, button, children }) {
  return (
    <>
      <div className="header">
        <div>
          <h1>{title}</h1>
          <div className="header-sub-title">&gt;{title}</div>
        </div>
        {button && (
          <LongButton
            type={button.type}
            url={button.url}
            description={button.description}
          />
        )}
      </div>
      {children}
    </>
  );
}
