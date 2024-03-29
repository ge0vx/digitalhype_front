import React, { ReactNode } from "react";
import './Modal.css'

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay" onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} className="modal-box">
            <div className="close" onClick={props.toggle}>x</div>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}