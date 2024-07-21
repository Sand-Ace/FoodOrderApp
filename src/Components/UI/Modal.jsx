import { useEffect, useReducer, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, className = "" }) => {
  const dialogRef = useRef();

  useEffect(() => {
    const modal = dialogRef.current;

    if (modal) {
      if (open) {
        modal.showModal();
      } else {
        modal.close();
      }
    }

    // cleanup function runs right before unmounting this modal
    return () => {
      modal.close();
    };
  }, [open]);

  return createPortal(
    <dialog ref={dialogRef} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
