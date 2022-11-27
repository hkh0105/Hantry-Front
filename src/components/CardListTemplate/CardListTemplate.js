import CardList from "../CardList/CardList";

import useCardListTemplate from "./useCardListTemplate";

export default function CardListTemplate() {
  const { projectList } = useCardListTemplate();

  return <CardList cardListInformation={projectList} />;
}
