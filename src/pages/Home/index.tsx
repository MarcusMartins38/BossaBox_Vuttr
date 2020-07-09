import React, { useState, useEffect } from "react";
import { TiDeleteOutline, TiPlus } from "react-icons/ti";
import { FaHashtag } from "react-icons/fa";

import api from "../../services/api";

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
  const [tools, setTools] = useState<PropsApi[]>([]);

  useEffect(() => {
    api.get("/tools").then((response) => {
      setTools(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <Container>
      <Content>
        <h1>Vuttr</h1>
        <h2>Very Useful Tools to Remember</h2>

        <HeaderOfList>
          <div>
            <InputSearchDiv>
              <img src={IconLupa} alt="Lupa" />
              <input type="text" placeholder="Search" />
            </InputSearchDiv>
            <input type="checkbox" />
            <label>Search in tags only</label>
          </div>
          <button>
            <TiPlus /> Add
          </button>
        </HeaderOfList>

        {tools.map((tool) => (
          <BoxOfApi key={tool.id}>
            <Information>
              <HeaderOfContent>
                <a href={tool.link}>{tool.title}</a>
                <div>
                  <button>
                    <TiDeleteOutline size={32} />
                  </button>
                  <p>remove</p>
                </div>
              </HeaderOfContent>

              <p id="description">{tool.description}</p>

              <div>
                {tool.tags.map((tag) => (
                  <strong key={tag}>#{tag}</strong>
                ))}
              </div>
            </Information>
          </BoxOfApi>
        ))}
      </Content>
    </Container>
  );
};

export default Home;
