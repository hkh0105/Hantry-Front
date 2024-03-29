import BreadCrumbleBox from "../BreadCrumbleBox/BreadCrumbleBox";
import CallStackBox from "../CallStackBox/CallStackBox";

export default function BreadCrumbleContainer({
  stack,
  breadcrumbsClick,
  breadcrumbsURL,
}) {
  const CallStackBoxProps = {
    list: stack,
    title: "Call Stack Context",
    description: "번째 Stack",
  };
  const BreadCrumbleClickProps = {
    list: breadcrumbsClick,
    title: "Breadcrumbs Click",
    description: "번째 Crumble",
  };
  const BreadCrumbleUrlProps = {
    list: breadcrumbsURL,
    title: "Breadcrumbs URL",
    description: "번째 Crumble",
  };

  return (
    <>
      <CallStackBox {...CallStackBoxProps} />
      <BreadCrumbleBox {...BreadCrumbleClickProps} />
      <BreadCrumbleBox {...BreadCrumbleUrlProps} />
    </>
  );
}
