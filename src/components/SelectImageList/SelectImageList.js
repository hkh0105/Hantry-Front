import "./SelectImageList.scss";

export default function SelectImageList({ selectList, select }) {
  const onSelectButtonHandler = event => {
    event.preventDefault();
    const unselected = document.getElementsByClassName("unselect-items");
    for (let i = 0; i < unselected.length; i++) {
      unselected[i].classList.remove("select-itmes");
    }

    event.target.classList.add("select-itmes");
    select(event.currentTarget.id);
  };

  return (
    <div className="select-platform">
      <p>Platform</p>
      <span>The primary platform for your project</span>
      <ul>
        {selectList.map((element, index) => {
          return (
            <li key={index}>
              <img
                className="unselect-items"
                src={process.env.PUBLIC_URL + `/${element}.png`}
                style={{ width: "80px", height: "80px" }}
                onClick={onSelectButtonHandler}
                id={element}
              />
              <p>{element}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
