import "./ErrorTitleContainer.scss";

export default function ErrorTitleContainer({ error }) {
  return (
    <>
      <div className="error-detail-title-container">
        <img src={process.env.PUBLIC_URL + "jotreactlogo.png"} />
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
    </>
  );
}
