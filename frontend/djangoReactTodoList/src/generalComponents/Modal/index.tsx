import Modal from "react-bootstrap/Modal";
import { ReactNode } from "react";
import React from "react";


interface ModalProps {
  show: boolean;
  handleShow: () => void;
  children: ReactNode;
  title:string
}

export const ModalComponent: React.FC<ModalProps> = ({show, handleShow, children, title}) => {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal fullscreen={"xl-down"} show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title> {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body> {children} </Modal.Body>
      </Modal>
    </div>
  );
};
