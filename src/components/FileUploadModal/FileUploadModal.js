import { useCallback, useState, useRef, useEffect } from "react";
import ModalFrame from "../ModalFrame/ModalFrame";
import styles from "./FileUploadModal.module.css";

export default function FileUploadModal() {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);

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

  const initDragEvents = useCallback(() => {
    console.log("dragRef", dragRef);
    if (dragRef.current !== null) {
      dragRef.current.addEventListener("dragenter", handleDragIn);
      dragRef.current.addEventListener("dragleave", handleDragOut);
      dragRef.current.addEventListener("dragover", handleDragOver);
      dragRef.current.addEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback(() => {
    console.log("dragRef", dragRef);
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
      <div className={styles.UploadContainer}>
        <input
          type="file"
          id="fileUpload"
          style={{ display: "none" }}
          multiple={true}
          onChange={onChangeFiles}
        />

        <label
          className={isDragging ? styles.Dragging : styles.DragDrop}
          htmlFor="fileUpload"
          ref={dragRef}
        >
          <div>Upload File</div>
        </label>

        <div className={styles.DragDropFiles}>
          {files.length > 0 &&
            files.map(file => {
              const {
                id,
                object: { name },
              } = file;
              return (
                <div className={styles.FileContainer} key={id}>
                  <div>{name}</div>
                  <div
                    className={styles.delete}
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
      </div>
    </ModalFrame>
  );
}
