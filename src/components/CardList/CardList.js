import "./ProjectList.scss";
import { useId } from "react";

import Card from "../Card/Card";
import Loadable from "../Loadable/Loadable";

export default function CardList({ cardListInformation }) {
  const cardId = useId();

  return (
    <Loadable isLoading={!cardListInformation?.length}>
      <div className="project-card-form">
        {cardListInformation?.map(element => (
          <Card cardData={element} key={cardId} />
        ))}
      </div>
    </Loadable>
  );
}
