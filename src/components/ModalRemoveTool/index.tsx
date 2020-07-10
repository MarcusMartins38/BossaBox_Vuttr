import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import ReactModal from "react-modal";

import { Container, Content } from "./styles";

import api from "../../services/api";

interface PropsApi {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

interface ModalProps {
  isRemoveOpen: boolean;
  setRemoveIsOpen: () => void;
  tool: PropsApi;
}

const ModalRemoveTool: React.FC<ModalProps> = ({
  isRemoveOpen,
  setRemoveIsOpen,
  tool,
}) => {
  const [modalRemoveStatus, setModalRemoveStatus] = useState(isRemoveOpen);

  useEffect(() => {
    setModalRemoveStatus(isRemoveOpen);
  }, [isRemoveOpen, tool]);

  const handleButtonRemove = useCallback(() => {
    api.delete(`/tools/${tool.id}`);
    window.location.reload();
  }, [tool.id]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={true}
      isOpen={modalRemoveStatus}
      onRequestClose={setRemoveIsOpen}
      contentLabel="Example Modal"
      ariaHideApp={false}
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
          width: "636px",
          height: "30vh",
          border: "0",
        },
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      <Container>
        <Content>
          <h1>x Remove Tool</h1>
          <p>
            Are you sure you want to remove <strong>{tool.title}</strong>?
          </p>

          <div>
            <button onClick={setRemoveIsOpen}>Cancel</button>
            <button onClick={handleButtonRemove}>Yes, Remove</button>
          </div>
        </Content>
      </Container>
    </ReactModal>
  );
};

export default ModalRemoveTool;
