import AddSlackBotButton from "../AddSlackBotButton/AddSlackBotButton";
import FileUploadModal from "../FileUploadModal/FileUploadModal";
import LongButton from "../LongButton/LongButton";

export default function SettingButtonHandler({
  modifiedProject,
  dsn,
  sourceMap,
  isUploadModal,
}) {
  const UpdateButtonProps = {
    dsn,
    description: "Update",
    project: modifiedProject,
  };
  const SourceMapButtonProps = { description: "SourceMap" };
  const DeleteButtonProps = { description: "Delete", dsn };
  const DeleteMapButtonProps = { description: "Delete Map", dsn };
  const ModalProps = { dsn };

  return (
    <>
      <LongButton {...UpdateButtonProps} />
      <LongButton {...SourceMapButtonProps} />
      <AddSlackBotButton />
      <LongButton {...DeleteButtonProps} />
      {sourceMap && <LongButton {...DeleteMapButtonProps} />}
      {isUploadModal && <FileUploadModal {...ModalProps} />}
    </>
  );
}
