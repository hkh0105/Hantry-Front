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

  return (
    <>
      <Loadable isLoading={!selectedError}>
        <ErrorHeader error={selectedError} mode={mode} onClickTab={setMode} />
        {mode === "detail" ? (
          <ErrorDetailsContainer error={selectedError} />
        ) : (
          <BreadCrumbleContainerTemplate />
        )}
      </Loadable>
    </>
  );
}
