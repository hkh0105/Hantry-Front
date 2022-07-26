import "./ErrorDetail.scss";
import BreadCrumbleContainer from "../../components/BreadCrumbleContainer/BreadCrumbleContainer";
import CallStackContainer from "../../components/CallStackContainer/CallStackContainer";
import PageHeader from "../../components/PageHeader/PageHeader";
import Loading from "../../components/Loading/Loading";
import TabMenu from "../../components/TabMenu/TabMenu";
import ErrorEventMessageContainer from "../../components/ErrorEventMessageContainer/ErrorEventMessageContainer";
import TagContainer from "../../components/TagContainer/TagContainer";
import ErrorTitleContainer from "../../components/ErrorTitleContainer/ErrorTitleContainer";
import BodyInfoContainer from "../../components/BodyInfoContainer/BodyInfoContainer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getErrorDetail } from "../../utils/API";

export default function ErrorDetail() {
  const { errorId } = useParams();
  const [error, setError] = useState({});
  const [mode, setMode] = useState("detail");

  useEffect(() => {
    (async function getError() {
      const errorDetail = await getErrorDetail(errorId);
      setError(errorDetail.data.error);
    })();
  }, []);

  const handleDetailTab = event => {
    event.preventDefault();
    setMode(event.target.id);
  };

  return (
    <div>
      {!error && <Loading />}
      <PageHeader title={"Error"} subTitle={"Error Detail"}></PageHeader>
      <ErrorTitleContainer error={error}></ErrorTitleContainer>
      <TabMenu
        menuOne={"detail"}
        menuTwo={"breadcrumbs"}
        titleOne={"Detail"}
        titleTwo={"Breadcrumbs"}
        mode={mode}
        onClick={handleDetailTab}
      ></TabMenu>
      {mode === "detail" ? (
        <>
          <div className="error-detail-detail-header">
            <ErrorEventMessageContainer error={error} />
            <TagContainer error={error} />
          </div>
          <div className="error-detail-body">
            <BodyInfoContainer
              title={"OS"}
              description={error.user && error.user.os}
            ></BodyInfoContainer>
            <BodyInfoContainer
              title={"UA"}
              description={error.user && error.user.ua}
            ></BodyInfoContainer>
            <BodyInfoContainer
              title={"Browser"}
              description={error.user && error.user.borwser}
            ></BodyInfoContainer>
            <BodyInfoContainer
              title={"Engine"}
              description={error.user && error.user.engine}
            ></BodyInfoContainer>
          </div>
        </>
      ) : (
        <>
          <CallStackContainer
            list={error.stack}
            title={"Call Stack Context"}
            description={"번째 Stack"}
          ></CallStackContainer>
          <BreadCrumbleContainer
            title={"Breadcrumbs Click"}
            description={"번째 Crumble"}
            list={error.breadcrumbsClick}
          ></BreadCrumbleContainer>
          <BreadCrumbleContainer
            title={"Breadcrumbs URL"}
            description={"번째 Crumble"}
            list={error.breadcrumbsURL}
          ></BreadCrumbleContainer>
        </>
      )}
    </div>
  );
}
