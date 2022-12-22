import BreadCrumbleBox from "../BreadCrumbleBox/BreadCrumbleBox";
import CallStackBox from "../CallStackBox/CallStackBox";

export default function BreadCrumbleContainer({
  stack,
  breadcrumbsClick,
  breadcrumbsURL,
}) {
  return (
    <>
      <CallStackBox
        list={stack}
        title={"Call Stack Context"}
        description={"번째 Stack"}
      />
      <BreadCrumbleBox
        title={"Breadcrumbs Click"}
        description={"번째 Crumble"}
        list={breadcrumbsClick}
      />
      <BreadCrumbleBox
        title={"Breadcrumbs URL"}
        description={"번째 Crumble"}
        list={breadcrumbsURL}
      />
    </>
  );
}
