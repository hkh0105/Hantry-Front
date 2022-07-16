export default function ErrorFilter({ onSearchFilterHandler }) {
  return (
    <div className="filter-container">
      <span className="search">
        <img src={process.env.PUBLIC_URL + "glass.png"} />
        <input
          placeholder="Custon filter.."
          onChange={onSearchFilterHandler}
        ></input>
      </span>
    </div>
  );
}
