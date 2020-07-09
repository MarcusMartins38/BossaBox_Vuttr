import React, { useEffect } from "react";
import ReactModal from "react-modal";
import { TiPlus } from "react-icons/ti";

import { Container, Content } from "./styles";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = React.useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={true}
      isOpen={modalStatus}
      onRequestClose={setIsOpen}
      contentLabel="Example Modal"
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "transparent",
          color: "#000000",
          borderRadius: "8px",
          width: "736px",
          height: "70vh",
          border: "1px solid white",
        },
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      <Container>
        <div id="top_div">
          <TiPlus size={24} />
          <h2>Add new tool</h2>
        </div>

        <Content>
          <form>
            <label htmlFor="toolname">Tool Name:</label>
            <input id="toolname" type="text" name="toolname" />
            <label htmlFor="toolname">Tool Link:</label>
            <input id="toolname" type="text" name="toolname" />
            <label htmlFor="toolname">Tool Description:</label>
            <textarea id="toolname" name="toolname" rows={5} />
            <label htmlFor="toolname">Tags:</label>
            <input id="toolname" type="text" name="toolname" />
            <button>Add tool</button>
          </form>
        </Content>
      </Container>
    </ReactModal>
  );
};

export default ModalComponent;
