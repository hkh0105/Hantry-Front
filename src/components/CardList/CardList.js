import "./ProjectList.scss";
import { v4 as uuidv4 } from "uuid";

import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";

export default function CardList({ cardListInformation }) {
  const navigate = useNavigate();

  if (!cardListInformation?.length) return navigate("/project/create");

  return (
    <>
      {cardListInformation?.map(cardInformation => {
        const { name, platform, dsn, error } = cardInformation;
        const cardId = uuidv4();
        const CardProps = {
          name,
          platform,
          dsn,
          error,
        };

        return <Card {...CardProps} key={cardId} />;
      })}
    </>
  );
}
