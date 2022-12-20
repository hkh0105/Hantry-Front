import ErrorTitleContainer from "../ErrorTitleContainer/ErrorTitleContainer";
import TabMenu from "../TabMenu/TabMenu";

import { IMAGES } from "../../constants/images";

export default function ErrorHeader({ error, mode, onClickTab }) {
  const { type, source, createdAt, message } = error;
  const ErrorTitleContainerProps = {
    type,
    source,
    createdAt,
    message,
    image: IMAGES.ReactLogo,
  };

  const TabMenuProps = {
    menuOne: "detail",
    menuTwo: "breadcrumbs",
    titleOne: "Detail",
    titleTwo: "Breadcrumbs",
    onClick: onClickTab,
    mode,
  };

  return (
    <>
      <ErrorTitleContainer {...ErrorTitleContainerProps} />
      <TabMenu {...TabMenuProps} />
    </>
  );
}
