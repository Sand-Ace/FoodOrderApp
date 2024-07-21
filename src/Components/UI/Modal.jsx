import { useEffect, useReducer, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ onClose, children, open, className = "" }) => {
  const dialogRef = useRef();

  useEffect(() => {
    const modal = dialogRef.current;

    if (modal) {
      if (open) {
        console.log("checkout is open");
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
    <dialog ref={dialogRef} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
