import "./PageHeader.scss";

import LongButton from "../LongButton/LongButton";
import usePageHeader from "./usePageHeader";

export default function PageHeader({ subTitle, children }) {
  const { title, isMain } = usePageHeader();
  return (
    <>
      <div className="header">
        <div>
          <h1>{title}</h1>
          <div className="header-sub-title">
            {subTitle}&gt;{title}
          </div>
        </div>
        {isMain && (
          <LongButton
            type="navigation"
            url="/create_project"
            description="Create a new project"
          />
        )}
      </div>
      {children}
    </>
  );
}
