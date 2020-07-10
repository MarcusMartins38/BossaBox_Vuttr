import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;

  background-color: white;
  border-radius: 10px;
  border: 2px solid black;
`;

export const Content = styled.div`
  width: 80%;
  margin: 16px auto 0 auto;

  display: flex;
  flex-direction: column;

  background-color: white;

  h1 {
    font-weight: 500;
    margin-bottom: 40px;
  }

  div {
    margin-top: 40px;
    margin-left: 200px;

    button {
      padding: 12px;
      cursor: pointer;
      border: 2px solid black;
      background-color: #fb3741;
      color: white;

      transition: background-color 0.5s;

      &:hover {
        background-color: #a0030b;
      }

      & + button {
        margin-left: 40px;
      }
    }
  }
`;
