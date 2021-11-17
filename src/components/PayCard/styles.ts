import styled from "styled-components";

export const PayCardStyled = styled.div`
  width: 90%;
  padding: 20px 0;
  max-width: 230px;
  background-color: #dddddd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;

  :hover {
    box-shadow: 0px 0px 5px var(--darkBlue);
    transition: 200ms;
  }

  > button {
    width: 35%;

    border: none;
    border-radius: 5px;
    background-color: var(--darkBlue);
    color: var(--mainGray);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 2px;
    font-size: small;
    margin: 20px auto 0;

    :hover {
      color: var(--darkBlue);
      background-color: var(--mainGray);
      transition: 500ms;
    }
  }

  @media (min-width: 480px) {
    max-width: 400px;
    button {
      font-size: 16px;
    }
  }

  @media (min-width: 880px) {
    button {
      margin: 30px auto 10px;
    }
  }

  @media (min-width: 1024px) {
    margin: 10px;
  }
`;

export const RowBox = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  > img {
    width: 55px;
    height: 55px;
  }

  > ul {
    li {
      list-style: none;
      font-size: 11px;
      color: #404040;
    }
  }
  @media (min-width: 480px) {
    img {
      width: 65px;
      height: 65px;
    }
    ul li {
      font-size: 14px;
    }
  }
  @media (min-width: 880px) {
    img {
      width: 75px;
      height: 75px;
    }
    ul li {
      font-size: 18px;
    }
  }
`;

export const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
