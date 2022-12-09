import "./Button.scss";

export default function LongButton({ description, onClick }) {
  return (
    <>
      <button className="long-button" onClick={onClick}>
        {description}
      </button>
    </>
  );
}
