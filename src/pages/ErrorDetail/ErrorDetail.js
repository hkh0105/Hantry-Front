import "./ErrorDetail.scss";
import Loadable from "../../components/Loadable/Loadable";
import ErrorDetailsContainer from "../../components/ErrorDetailsContainer/ErrorDetaulsContainer";
import ErrorHeader from "../../components/ErrorHeader/ErrorHeader";
import BreadCrumbleContainerTemplate from "../../components/BreadCrumbleContainerTemplate/BreadCrumbleContainerTemplate";

import useModeSellect from "../../hooks/useModeSellect";
import useErrorDetail from "./useErrorDetail";

export default function ErrorDetail() {
  const { selectedError } = useErrorDetail();
  const { mode, setMode } = useModeSellect("detail");

  const LoadableProps = {
    isLoading: !selectedError,
  };

  const ErrorHeaderProps = {
    error: selectedError,
    onClickTab: event => setMode(event.target.id),
    mode,
  };

  const ErrorDetailsContainerProps = {
    error: selectedError,
  };

  const ModeContainer = {
    detail: <ErrorDetailsContainer {...ErrorDetailsContainerProps} />,
    breadcrumbs: <BreadCrumbleContainerTemplate />,
  };

  return (
    <Loadable {...LoadableProps}>
      <ErrorHeader {...ErrorHeaderProps} />
      {ModeContainer[mode]}
    </Loadable>
  );
}
