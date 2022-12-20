import "./ErrorTitleContainer.scss";

export default function ErrorTitleContainer({
  type,
  source,
  createdAt,
  message,
  image,
}) {
  return (
    <>
      <div className="error-detail-title-container">
        <img src={image} />
        <h1>{type}</h1>
        <span>
          {source}
          {createdAt}
        </span>
      </div>
      <div className="error-detail-detail-container">
        <span></span>
        <p>{message}</p>
      </div>
    </>
  );
}
