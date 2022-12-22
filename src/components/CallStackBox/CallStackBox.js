export default function CallStackContainer({ title, description, list }) {
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
                      <strong>{element.function}</strong>
                    </li>
                    <li>
                      {!element.function &&
                        !element.lineno &&
                        !element.colno &&
                        element}
                      {element.lineno && <span>line:{element.lineno}</span>}

                      {element.colno && <span>col:{element.colno}</span>}
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
