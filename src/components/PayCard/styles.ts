import styled from "styled-components";

export const PayCardStyled = styled.div`
  width: 90%;
  height: 88px;
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

    :hover {
      color: var(--darkBlue);
      background-color: var(--mainGray);
      transition: 500ms;
    }
  }

  @media (min-width: 768px) {
    height: 110px;
    margin: 20px;
  }

  @media (min-width: 1024px) {
    max-width: 220px;
    margin: 10px;
  }
`;

export const RowBox = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  > img {
    width: 55px;
    height: 55px;
    margin-top: 20px;
  }

  > ul {
    li {
      list-style: none;
      font-size: 11px;
    }
  }
`;

export const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
