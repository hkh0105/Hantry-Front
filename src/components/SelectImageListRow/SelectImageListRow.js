import "./SelectImageListRow.scss";

import { IMAGES } from "../../constants/images";
import useSelectedImageRow from "./useSelectImageRow";

export default function SelectImageListRow({
  selectList,
  title,
  subTitle,
  onSelect,
}) {
  const { selectedLanguage, onClickImage } = useSelectedImageRow(onSelect);

  return (
    <div className="select-platform">
      <p>{title}</p>
      <span>{subTitle}</span>
      <ul>
        {selectList.map((element, index) => (
          <form key={index}>
            <button
              key={index}
              className="language-itmes"
              onClick={event => onClickImage(event, element)}
              style={{
                border:
                  element === selectedLanguage
                    ? "2px solid red"
                    : "2px solid #daa",
                backgroundImage: `url(${IMAGES[element]})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
            <p>{element}</p>
          </form>
        ))}
      </ul>
    </div>
  );
}
