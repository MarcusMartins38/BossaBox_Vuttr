import React, { useState, useEffect, useCallback } from "react";
import { TiDeleteOutline, TiPlus } from "react-icons/ti";

import api from "../../services/api";
import ModalAddTool from "../../components/ModalAddTool";
import ModalRemoveTool from "../../components/ModalRemoveTool";

import {
  Container,
  Content,
  HeaderOfList,
  InputSearchDiv,
  BoxOfApi,
  Information,
  HeaderOfContent,
} from "./styles";

import IconLupa from "../../assets/IconLupa.svg";

interface PropsApi {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

const Home: React.FC = () => {
  const [modalAddOpen, setModalAddOpen] = useState(false);
  const [modalRemoveOpen, setModalRemoveOpen] = useState(false);
  const [selectRemoveTool, setselectRemoveTool] = useState<PropsApi>(
    {} as PropsApi
  );

  const [tools, setTools] = useState<PropsApi[]>([]);

  const [searchTool, setSearchTool] = useState<string>("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // MELHOR METODO, NO QUAL SÓ REALIZA QUERRY, SE O INPUT ESTIVER VAZIO
    // DIMINUINDO DRASTICAMENTE A QUANTIDADE DE QUERRY'S NECESSARIAS PARA
    // FAZER UMA BUSCA

    // if (searchTool === "") {
    //   api.get("/tools").then((response) => {
    //     setTools(response.data);
    //   });
    // } else {
    //   const lowerSearchTool = searchTool.toLowerCase();
    //   let b = tools.filter(
    //     (item) => item.title.toLowerCase().indexOf(lowerSearchTool) > -1
    //   );
    //   setTools(b);
    // }

    async function loadTools(): Promise<void> {
      if (checked === false) {
        const response = await api.get("/tools", {
          params: {
            q: searchTool,
          },
        });

        setTools(response.data);
      } else {
        const res = await api.get("/tools", {
          params: {
            tags_like: searchTool,
          },
        });
        setTools(res.data);
      }
    }

    loadTools();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked, searchTool]);

  const handleButtonAdd = useCallback(() => {
    setModalAddOpen(!modalAddOpen);
  }, [modalAddOpen]);

  const handleRemoveTool = useCallback(
    (id) => {
      // api.delete(`/tools/${id}`);
      // api.get("/tools").then((response) => {
      //   setTools(response.data);
      // });
      setModalRemoveOpen(!modalAddOpen);
    },
    [modalAddOpen]
  );

  const tryhandleRemoveTool = useCallback(
    (tool) => {
      setselectRemoveTool(tool);
      setModalRemoveOpen(!modalAddOpen);
    },
    [modalAddOpen]
  );

  const try2handleRemoveTool = useCallback(() => {
    setModalRemoveOpen(!modalRemoveOpen);
  }, [modalRemoveOpen]);

  return (
    <Container>
      <Content>
        <h1>Vuttr</h1>
        <h2>Very Useful Tools to Remember</h2>

        <HeaderOfList>
          <div>
            <InputSearchDiv>
              <img src={IconLupa} alt="Lupa" />
              <input
                type="text"
                placeholder="Search"
                onChange={(event) => setSearchTool(event.target.value)}
              />
            </InputSearchDiv>
            <input type="checkbox" onChange={() => setChecked(!checked)} />
            <label>Search in tags only</label>
          </div>
          <button onClick={handleButtonAdd}>
            <TiPlus /> Add
          </button>
          <ModalAddTool isOpen={modalAddOpen} setIsOpen={handleButtonAdd} />
        </HeaderOfList>

        {tools.map((tool) => (
          <BoxOfApi key={tool.id}>
            <Information>
              <HeaderOfContent>
                <a href={tool.link}>{tool.title}</a>
                <div>
                  <button onClick={() => tryhandleRemoveTool(tool)}>
                    <TiDeleteOutline size={32} />
                  </button>
                  <p>remove</p>
                </div>
              </HeaderOfContent>

              <p id="description">{tool.description}</p>

              <div id="div_tags">
                {tool.tags.map((tag) => (
                  <strong key={tag}>#{tag}</strong>
                ))}
              </div>
            </Information>
          </BoxOfApi>
        ))}
      </Content>
      <ModalRemoveTool
        isRemoveOpen={modalRemoveOpen}
        setRemoveIsOpen={try2handleRemoveTool}
        tool={selectRemoveTool}
      />
    </Container>
  );
};

export default Home;
