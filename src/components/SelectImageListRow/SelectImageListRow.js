import "./SelectImageListRow.scss";

import { IMAGES } from "../../constants/images";

export default function SelectImageListRow({
  selectList,
  select,
  title,
  subTitle,
}) {
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
      <p>{title}</p>
      <span>{subTitle}</span>
      <ul>
        {selectList.map((element, index) => (
          <li key={index}>
            <img
              className="unselect-items"
              src={IMAGES[element]}
              onClick={onSelectButtonHandler}
              id={element}
            />
            <p>{element}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
