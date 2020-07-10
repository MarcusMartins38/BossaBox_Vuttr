import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;

  background-color: white;
  border-radius: 10px;
  border: 2px solid black;

  overflow-y: scroll;

  #top_div {
    margin-top: 32px;
    margin-left: 12px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled.div`
  width: 80%;
  margin: 16px auto 0 auto;

  display: flex;
  flex-direction: column;

  background-color: white;

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 18px;
    }

    input {
      margin-top: 16px;
      margin-bottom: 24px;
      border: 2px solid black;
      padding: 6px 0;
    }

    textarea {
      margin-top: 16px;
      margin-bottom: 24px;
      border: 2px solid black;
      padding: 6px 0;
    }

    button {
      max-width: 140px;
      border: 2px solid black;
      padding: 9px;
      margin-left: 420px;
    }
  }
`;
