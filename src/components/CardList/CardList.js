import "./ProjectList.scss";
import { useId } from "react";

import Card from "../Card/Card";
import Loadable from "../Loadable/Loadable";
import { useNavigate } from "react-router-dom";

export default function CardList({ cardListInformation }) {
  const cardId = useId();
  const navigate = useNavigate();

  if (!cardListInformation?.length) return navigate("/project/create");

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

  return { cardList };
}
