import "./InfoTags.scss";
import { DiReact, DiChrome, DiApple, DiWindows } from "react-icons/di";
import { FaInternetExplorer } from "react-icons/fa";

export default function InfoTags({ browser, os, engine }) {
  return (
    <div className="error-detail-event-env">
      <p>TAGS</p>
      <div>
        <span>
          {browser == "Chrome" ? (
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
            {browser}
            <div className="error-detail-version">Version: 65.0.3325</div>
          </div>
        </span>
        <span>
          {os == "Mac OS" ? (
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
            {os}
            <div className="error-detail-version">Version: 65.0.3325</div>
          </div>
        </span>
        <span>
          <DiChrome
            style={{ width: "60px", height: "60px", color: "#f37464" }}
          />
          <div className="error-detail-version-container">
            {engine}
            <div className="error-detail-version">Version: Null</div>
          </div>
        </span>
      </div>
    </div>
  );
}
