import InfoTags from "../InfoTags/InfoTags";
import InfoBox from "../InfoBox/InfoBox";

export default function ErrorDetailsContainer({
  message,
  source,
  createdAt,
  user,
}) {
  const { browser, os, engine } = user || {};
  const ErrorInfoBoxProps = {
    title: "Error",
    description: message + source + createdAt,
  };
  const InfoTagsProps = { browser, os, engine };
  const OsInfoBoxProps = { title: "OS", description: user?.os };
  const UAInfoBoxProps = { title: "UA", description: user?.ua };
  const BrowserInfoBoxProps = {
    title: "Browser",
    description: user?.borwser,
  };
  const EngineInfoBoxProps = {
    title: "Engine",
    description: user?.engine,
  };

  return (
    <>
      <div className="error-detail-detail-header">
        <InfoBox {...ErrorInfoBoxProps} />
        <InfoTags {...InfoTagsProps} />
      </div>
      <div className="error-detail-body">
        <InfoBox {...OsInfoBoxProps} />
        <InfoBox {...UAInfoBoxProps} />
        <InfoBox {...BrowserInfoBoxProps} />
        <InfoBox {...EngineInfoBoxProps} />
      </div>
    </>
  );
}
