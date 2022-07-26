import "./ErrorEventMessageContainer.scss";

export default function ErrorEventMessageContainer({ error }) {
  return (
    <div className="error-detail-event-message">
      <p>
        <strong>Event</strong> {error.message}
      </p>
      <p>
        {error.source}
        {error.createdAt}
      </p>
    </div>
  );
}
