import styles from "./ErrorDetail.module.css";
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
      <div className={styles.subTitle}>Errors &gt; Error Detail</div>
      <div className={styles.titleContainer}>
        <img src={process.env.PUBLIC_URL + "jotreactlogo.png"} style={{}} />
        <h1>{error.type}</h1>
        <span>{error.createdAt}</span>
      </div>
      <div className={styles.detailContainer}>
        <span></span>
        <p>{error.message}</p>
      </div>
      <div className={styles.tabMenu}>
        <span
          id="detail"
          onClick={handleDetailTab}
          className={mode === "detail" ? styles.clickTab : styles.nonClickTab}
        >
          Details
        </span>
        <span
          id="breadcrumbs"
          onClick={handleDetailTab}
          className={
            mode === "breadcrumbs" ? styles.clickTab : styles.nonClickTab
          }
        >
          Breadcrumbs
        </span>
      </div>
      {mode === "detail" ? (
        <div>
          <div className={styles.bHeader}>
            <div className={styles.EventMessage}>
              <p>
                <strong>Event</strong> {error.message}
              </p>
              <p>{error.createdAt}</p>
            </div>
            <div className={styles.EventEnv}>
              <p>TAGS</p>
              <div>
                <span>
                  <img src={process.env.PUBLIC_URL + "chromeBrowser.png"} />
                  <div className={styles.versionContainer}>
                    {error.user && error.user.browser}
                    <div className={styles.version}>Version: 65.0.3325</div>
                  </div>
                </span>
                <span>
                  <img src={process.env.PUBLIC_URL + "Mac.png"} />
                  <div className={styles.versionContainer}>
                    {error.user && error.user.os}
                    <div className={styles.version}>Version: 65.0.3325</div>
                  </div>
                </span>
                <span>
                  <img src={process.env.PUBLIC_URL + "chromeBrowser.png"} />
                  <div className={styles.versionContainer}>
                    {error.user && error.user.engine}
                    <div className={styles.version}>Version: Null</div>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.bBody}>
            <div className={styles.bodyContainer}>
              <span>OS</span>
              <div> {error.user && error.user.os}</div>
            </div>
            <div className={styles.bodyContainer}>
              <span>UA</span>
              <div> {error.user && error.user.ua}</div>
            </div>
            <div className={styles.bodyContainer}>
              <span>Browser</span>
              <div> {error.user && error.user.browser}</div>
            </div>
            <div className={styles.bodyContainer}>
              <span>Engine</span>
              <div> {error.user && error.user.engine}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.dBody}>
          <div className={styles.bodyContainer}>
            <span>Call Stack Context</span>
            <div>
              {error.stack &&
                error.stack.map((element, i) => {
                  return (
                    <>
                      <p>{i}번쨰 Stack</p>
                      <br />
                      <p>{element.function}</p>
                      <br />
                      <p>{element.lineno}</p>
                      <br />
                      <p>{element.colno}</p>
                      <br />
                    </>
                  );
                })}
            </div>
          </div>
          <div className={styles.bodyContainer}>
            <span>BreadcrumbsClick</span>
            <div>
              {error.breadcrumbsClick &&
                error.breadcrumbsClick.map((element, i) => {
                  return (
                    <>
                      <p>Element</p>
                      <br />
                      <p>{element}</p>
                    </>
                  );
                })}
            </div>
          </div>
          <div className={styles.bodyContainer}>
            <span>BreadcrumbsURL</span>
            <div>
              {error.breadcrumbsURL &&
                error.breadcrumbsURL.map((element, i) => {
                  return (
                    <>
                      <p>URL</p>
                      <br />
                      <p>{element}</p>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
