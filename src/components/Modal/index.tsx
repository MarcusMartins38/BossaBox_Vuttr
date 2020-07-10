import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import ReactModal from "react-modal";
import { TiPlus } from "react-icons/ti";

import { Container, Content } from "./styles";

import api from "../../services/api";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

interface PropsApi {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

const ModalComponent: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  const [formData, setFormData] = useState({
    id: "",
    toolName: "",
    toolLink: "",
    toolDescription: "",
    tags: [""],
  });

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  const handleButtonAddTool = useCallback(
    (e) => {
      setFormData({ ...formData, id: formData.toolName });
      api.post("/tools", formData);
      console.log();
    },
    [formData]
  );

  const handleFormData = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;

      if (name === "tags") {
        const res = value.split(" ");
        setFormData({ ...formData, [name]: res });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    },
    [formData]
  );

  return (
    <ReactModal
      shouldCloseOnOverlayClick={true}
      isOpen={modalStatus}
      onRequestClose={setIsOpen}
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
          width: "736px",
          height: "70vh",
          border: "0",
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
            <label htmlFor="toolName">Tool Name:</label>
            <input
              id="toolName"
              type="text"
              name="title"
              onChange={handleFormData}
            />
            <label htmlFor="toolLink">Tool Link:</label>
            <input
              id="toolLink"
              type="text"
              name="link"
              onChange={handleFormData}
            />
            <label htmlFor="toolDescription">Tool Description:</label>
            <textarea
              id="toolDescription"
              name="description"
              rows={5}
              onChange={handleFormData}
            />
            <label htmlFor="tags">Tags:</label>
            <input
              id="tags"
              type="text"
              name="tags"
              onChange={handleFormData}
            />
            <button onClick={(e) => handleButtonAddTool(e)}>Add tool</button>
          </form>
        </Content>
      </Container>
    </ReactModal>
  );
};

export default ModalComponent;
