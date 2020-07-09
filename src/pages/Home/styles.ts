import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 900px;

  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 64px;

  display: flex;
  flex-direction: column;

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
    padding: 12px 40px;
    background-color: #5b44ee;
    color: white;

    border: 1px solid black;
    border-radius: 6px;

    font-size: 18px;

    display: flex;
    justify-items: center;
    justify-content: center;

    cursor: pointer;
    transition: background-color 0.5s;

    &:hover {
      background-color: #20127d;
    }
    &:active {
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

export const BoxOfApi = styled.div`
  width: 100%;
  min-height: 150px;

  margin-top: 20px;
  margin-bottom: 30px;

  border: 2px solid black;
`;

export const HeaderOfContent = styled.div`
  display: flex;

  justify-content: space-between;

  a {
    font-size: 32px;
    color: #4129e0;
    transition: font-size 0.5s;

    &:hover {
      font-size: 36px;
    }
  }

  div {
    display: flex;
    align-items: center;

    button {
      background-color: transparent;
      border: 0;
      cursor: pointer;

      svg {
        color: #fb3741;
        transition: color 0.5s;

        &:hover {
          color: #a0030b;
        }
      }
    }
  }
`;

export const Information = styled.div`
  width: 95%;

  margin: 12px auto 0 auto;

  #description {
    margin-top: 16px;
  }

  div {
    margin-top: 8px;

    strong {
      margin-right: 8px;
    }
  }
`;
