import { useCallback, useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProject } from "../../api/project";
import { offModal } from "../../store/modalSlice";
import { getBase64 } from "../../utils/filleToData64";
import ModalFrame from "../ModalFrame/ModalFrame";
import "./FileUploadModal.scss";

export default function FileUploadModal({ dsn }) {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();

  const dragRef = useRef(null);
  const fileId = useRef(0);

  const onChangeFiles = useCallback(
    event => {
      let selectFiles = [];
      let tempFiles = files;

      if (event.type === "drop") {
        selectFiles = event.dataTransfer.files;
      } else {
        selectFiles = event.target.files;
      }

      for (const file of selectFiles) {
        tempFiles = [
          ...tempFiles,
          {
            id: fileId.current++,
            object: file,
          },
        ];
      }

      setFiles(tempFiles);
    },
    [files],
  );

  const handleFilterFile = useCallback(
    id => {
      setFiles(files.filter(file => file.id !== id));
    },
    [files],
  );

  const handleDragIn = useCallback(event => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  const handleDragOut = useCallback(event => {
    event.preventDefault();
    event.stopPropagation();

    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback(event => {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer.files) {
      setIsDragging(true);
    }
  }, []);

  const handleDrop = useCallback(
    event => {
      event.preventDefault();
      event.stopPropagation();

      onChangeFiles(event);
      setIsDragging(false);
    },
    [onChangeFiles],
  );

  const handleSendSourceMap = async event => {
    event.preventDefault();

    const sourceMap = await getBase64(files[0].object);
    const r = await updateSourceMap(dsn, sourceMap);
    dispatch(offModal());
  };

  const initDragEvents = useCallback(() => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener("dragenter", handleDragIn);
      dragRef.current.addEventListener("dragleave", handleDragOut);
      dragRef.current.addEventListener("dragover", handleDragOver);
      dragRef.current.addEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback(() => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener("dragenter", handleDragIn);
      dragRef.current.removeEventListener("dragleave", handleDragOut);
      dragRef.current.removeEventListener("dragover", handleDragOver);
      dragRef.current.removeEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  return (
    <ModalFrame>
      <div className="upload-container">
        <input
          type="file"
          id="file-upload"
          style={{ display: "none" }}
          multiple={true}
          onChange={onChangeFiles}
        />

        <label
          className={isDragging ? "dragging" : "drag-drop"}
          htmlFor="fileUpload"
          ref={dragRef}
        >
          <div>Upload File</div>
        </label>

        <div className="drag-drop-files">
          {files.length > 0 &&
            files.map(file => {
              const {
                id,
                object: { name },
              } = file;
              return (
                <div className="file-container" key={id}>
                  <div>{name}</div>
                  <div
                    className="delete"
                    onClick={() => {
                      handleFilterFile(id);
                    }}
                  >
                    X
                  </div>
                </div>
              );
            })}
        </div>
        <div className="modal-button">
          <button onClick={handleSendSourceMap}>전송하기</button>
          <button onClick={() => dispatch(offModal())}>닫기</button>
        </div>
      </div>
    </ModalFrame>
  );
}
