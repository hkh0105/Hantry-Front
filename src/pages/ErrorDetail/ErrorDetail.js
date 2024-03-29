import "./ErrorDetail.scss";
import Loadable from "../../components/Loadable/Loadable";
import ErrorDetailsContainer from "../../components/ErrorDetailsContainer/ErrorDetaulsContainer";
import ErrorHeader from "../../components/ErrorHeader/ErrorHeader";
import BreadCrumbleContainer from "../../components/BreadCrumbleContainer/BreadCrumbleContainer";

import useModeSellect from "../../hooks/useModeSellect";
import useErrorDetail from "./useErrorDetail";

export default function ErrorDetail() {
  const { selectedError } = useErrorDetail();
  const { mode, setMode } = useModeSellect("detail");
  const {
    stack,
    breadcrumbsClick,
    breadcrumbsURL,
    message,
    source,
    createdAt,
    user,
  } = selectedError;

  const LoadableProps = {
    isLoading: !selectedError,
  };

  const ErrorHeaderProps = {
    error: selectedError,
    onClickTab: event => setMode(event.target.id),
    mode,
  };

  const ErrorDetailsContainerProps = {
    message,
    source,
    createdAt,
    user,
  };

  const BreadCrumbleContainerProps = {
    stack,
    breadcrumbsClick,
    breadcrumbsURL,
  };

  const ModeContainer = {
    detail: <ErrorDetailsContainer {...ErrorDetailsContainerProps} />,
    breadcrumbs: <BreadCrumbleContainer {...BreadCrumbleContainerProps} />,
  };

  return (
    <Loadable {...LoadableProps}>
      <ErrorHeader {...ErrorHeaderProps} />
      {ModeContainer[mode]}
    </Loadable>
  );
}
