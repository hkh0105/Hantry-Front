export default function BreadCrumbleBox({ title, description, list }) {
  return (
    <div className="bread-crumble-body-container">
      <span className="bread-crumble-body-title">{title}</span>
      <div>
        <ol start="0">
          {list &&
            list.map((element, i) => {
              return (
                <li key={i}>
                  {description}
                  <ul>
                    <li>
                      <span>{element}</span>
                    </li>
                  </ul>
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
}
