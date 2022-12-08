import BodyInfoContainer from "../BodyInfoContainer/BodyInfoContainer";
import ErrorEventMessageContainer from "../ErrorEventMessageContainer/ErrorEventMessageContainer";
import TagContainer from "../TagContainer/TagContainer";

export default function ErrorDetailsContainer({ error }) {
  return (
    <>
      <div className="error-detail-detail-header">
        <ErrorEventMessageContainer error={error} />
        <TagContainer error={error} />
      </div>
      <div className="error-detail-body">
        <BodyInfoContainer
          title={"OS"}
          description={error?.user?.os}
        ></BodyInfoContainer>
        <BodyInfoContainer
          title={"UA"}
          description={error?.user?.ua}
        ></BodyInfoContainer>
        <BodyInfoContainer
          title={"Browser"}
          description={error?.user?.borwser}
        ></BodyInfoContainer>
        <BodyInfoContainer
          title={"Engine"}
          description={error?.user?.engine}
        ></BodyInfoContainer>
      </div>
    </>
  );
}
