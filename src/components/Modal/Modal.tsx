import React, { FC } from "react";

import "./Modal.css";

type ModalProps = {
  onClose: () => void;
  children?: React.ReactNode;
};

const Modal: FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className={"overlay"} onClick={onClose}>
      <div className={"content"} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
