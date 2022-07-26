import "./TagContainer.scss";
import { DiReact, DiChrome, DiApple, DiWindows } from "react-icons/di";
import { FaInternetExplorer } from "react-icons/fa";

export default function TagContainer({ error }) {
  return (
    <div className="error-detail-event-env">
      <p>TAGS</p>
      <div>
        <span>
          {error.user && error.user.browser == "Chrome" ? (
            <DiChrome
              style={{
                width: "60px",
                height: "60px",
                color: "#f37464",
              }}
            />
          ) : (
            <FaInternetExplorer
              style={{
                width: "60px",
                height: "60px",
                color: "#f37464",
              }}
            />
          )}
          <div className="error-detail-version-container">
            {error.user && error.user.browser}
            <div className="error-detail-version">Version: 65.0.3325</div>
          </div>
        </span>
        <span>
          {error.user && error.user.os == "Mac OS" ? (
            <DiApple
              style={{
                width: "60px",
                height: "60px",
                color: "#f37464",
              }}
            />
          ) : (
            <DiWindows
              style={{
                width: "60px",
                height: "60px",
                color: "#f37464",
              }}
            />
          )}

          <div className="error-detail-version-container">
            {error.user && error.user.os}
            <div className="error-detail-version">Version: 65.0.3325</div>
          </div>
        </span>
        <span>
          <DiChrome
            style={{ width: "60px", height: "60px", color: "#f37464" }}
          />
          <div className="error-detail-version-container">
            {error.user && error.user.engine}
            <div className="error-detail-version">Version: Null</div>
          </div>
        </span>
      </div>
    </div>
  );
}
