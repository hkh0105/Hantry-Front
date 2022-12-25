import "./ProjectList.scss";
import { useId } from "react";

import Card from "../Card/Card";
import Loadable from "../Loadable/Loadable";

export default function CardList({ cardListInformation }) {
  const cardId = useId();

  const cardList = cardListInformation?.map(cardInformation => {
    const { name, platform, dsn, error } = cardInformation;
    const CardProps = {
      name,
      platform,
      dsn,
      error,
    };

    return <Card {...CardProps} key={cardId} />;
  });

  return (
    <Loadable isLoading={!cardListInformation?.length}>{cardList}</Loadable>
  );
}
