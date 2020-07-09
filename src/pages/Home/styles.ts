import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 900px;

  display: flex;
  flex-direction: column;
  margin: 0 auto;

  border: 1px solid black;

  h1 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 50px;
    letter-spacing: 2px;
    margin-bottom: 16px;
  }
`;

export const HeaderOfList = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    input {
      margin-right: 8px;

      width: 20px;
      height: 20px;
    }

    label {
      font-size: 18px;
    }
  }

  button {
    width: 114px;
    height: 32px;

    border: 1px solid black;
    border-radius: 6px;

    font-size: 16px;

    display: flex;
    justify-items: center;
    justify-content: center;

    img {
      margin-right: 5px;
      max-width: 15px;
      max-height: 15px;
    }
  }
`;

export const InputSearchDiv = styled.div`
  height: 40px;
  width: 200px;

  border: 2px solid black;

  margin-right: 16px;

  display: flex;
  justify-items: center;

  img {
    max-width: 15px;
    max-height: 15px;

    margin-left: 5px;
  }

  input {
    flex: 1;
    padding-left: 8px;

    font-size: 16px;
  }
`;
