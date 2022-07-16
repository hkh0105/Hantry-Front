import "./ErrorDetail.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getErrorDetail } from "../../utils/API";
import BreadCrumbleContainer from "../../components/BreadCrumbleContainer/BreadCrumbleContainer";
import CallStackContainer from "../../components/CallStackContainer/CallStackContainer";

export default function ErrorDetail() {
  const { errorId } = useParams();
  const [error, setError] = useState({});
  const [mode, setMode] = useState("detail");

  useEffect(() => {
    (async function getError() {
      const errorDetail = await getErrorDetail(errorId);
      console.log(errorDetail);
      setError(errorDetail.data.error);
    })();
  }, []);

  const handleDetailTab = event => {
    event.preventDefault();
    setMode(event.target.id);
  };

  return (
    <div>
      <div className="error-detail-sub-title">Errors &gt; Error Detail</div>
      <div className="error-detail-title-container">
        <img src={process.env.PUBLIC_URL + "jotreactlogo.png"} style={{}} />
        <h1>{error.type}</h1>
        <span>
          {error.source}
          {error.createdAt}
        </span>
      </div>
      <div className="error-detail-detail-container">
        <span></span>
        <p>{error.message}</p>
      </div>
      <div className="error-detail-tab-menu">
        <span
          id="detail"
          onClick={handleDetailTab}
          className={
            mode === "detail"
              ? "error-detail-click-tab"
              : "error-detail-non-click-tab"
          }
        >
          Details
        </span>
        <span
          id="breadcrumbs"
          onClick={handleDetailTab}
          className={
            mode === "breadcrumbs"
              ? "error-detail-click-tab"
              : "error-detail-non-click-tab"
          }
        >
          Breadcrumbs
        </span>
      </div>
      {mode === "detail" ? (
        <div>
          <div className="error-detail-detail-header">
            <div className="error-detail-event-message">
              <p>
                <strong>Event</strong> {error.message}
              </p>
              <p>
                {error.source}
                {error.createdAt}
              </p>
            </div>
            <div className="error-detail-event-env">
              <p>TAGS</p>
              <div>
                <span>
                  <img src={process.env.PUBLIC_URL + "chromeBrowser.png"} />
                  <div className="error-detail-version-container">
                    {error.user && error.user.browser}
                    <div className="error-detail-version">
                      Version: 65.0.3325
                    </div>
                  </div>
                </span>
                <span>
                  <img src={process.env.PUBLIC_URL + "Mac.png"} />
                  <div className="error-detail-version-container">
                    {error.user && error.user.os}
                    <div className="error-detail-version">
                      Version: 65.0.3325
                    </div>
                  </div>
                </span>
                <span>
                  <img src={process.env.PUBLIC_URL + "chromeBrowser.png"} />
                  <div className="error-detail-version-container">
                    {error.user && error.user.engine}
                    <div className="error-detail-version">Version: Null</div>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="error-detail-body">
            <div className="error-detail-body-container">
              <span>OS</span>
              <div> {error.user && error.user.os}</div>
            </div>
            <div className="error-detail-body-container">
              <span>UA</span>
              <div> {error.user && error.user.ua}</div>
            </div>
            <div className="error-detail-body-container">
              <span>Browser</span>
              <div> {error.user && error.user.browser}</div>
            </div>
            <div className="error-detail-body-container">
              <span>Engine</span>
              <div> {error.user && error.user.engine}</div>
            </div>
          </div>
        </div>
      ) : (
        <div>
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
        </div>
      )}
    </div>
  );
}
