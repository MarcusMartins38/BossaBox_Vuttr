import React, { useState, useEffect } from "react";

import api from "../../services/api";

import { Container, HeaderOfList, InputSearchDiv } from "./styles";

import IconLupa from "../../assets/IconLupa.svg";
import IconPlus from "../../assets/Plus.svg";

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
          <img src={IconPlus} alt="IconPlus" /> Add
        </button>
      </HeaderOfList>
    </Container>
  );
};

export default Home;
