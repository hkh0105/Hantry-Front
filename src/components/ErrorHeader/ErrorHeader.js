import ErrorTitleContainer from "../ErrorTitleContainer/ErrorTitleContainer";
import TabMenu from "../TabMenu/TabMenu";

export default function ErrorHeader({ error, mode, onClickTab }) {
  return (
    <>
      <ErrorTitleContainer error={error}></ErrorTitleContainer>
      <TabMenu
        menuOne={"detail"}
        menuTwo={"breadcrumbs"}
        titleOne={"Detail"}
        titleTwo={"Breadcrumbs"}
        mode={mode}
        onClick={onClickTab}
      ></TabMenu>
    </>
  );
}
