import CardList from "../CardList/CardList";

import useCardListContainer from "./useCardListContainer";

export default function CardListContainer() {
  const { projectList } = useCardListContainer();

  const CardListProps = {
    cardListInformation: projectList,
  };

  return <CardList {...CardListProps} />;
}
