import React from "react";

import { Container, HeaderOfList, InputSearchDiv } from "./styles";

import IconLupa from "../../assets/IconLupa.svg";
import IconPlus from "../../assets/Plus.svg";

const Home: React.FC = () => {
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
