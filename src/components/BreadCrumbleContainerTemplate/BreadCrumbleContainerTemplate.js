import BreadCrumbleContainer from "../BreadCrumbleContainer/BreadCrumbleContainer";
import CallStackContainer from "../CallStackContainer/CallStackContainer";
import { useSelector } from "react-redux";

export default function BreadCrumbleContainerTemplate() {
  const { selectedError } = useSelector(state => state.project);
  const { stack, breadcrumbsClick, breadcrumbsURL } = selectedError;

  return (
    <>
      <CallStackContainer
        list={stack}
        title={"Call Stack Context"}
        description={"번째 Stack"}
      ></CallStackContainer>
      <BreadCrumbleContainer
        title={"Breadcrumbs Click"}
        description={"번째 Crumble"}
        list={breadcrumbsClick}
      ></BreadCrumbleContainer>
      <BreadCrumbleContainer
        title={"Breadcrumbs URL"}
        description={"번째 Crumble"}
        list={breadcrumbsURL}
      ></BreadCrumbleContainer>
    </>
  );
}
