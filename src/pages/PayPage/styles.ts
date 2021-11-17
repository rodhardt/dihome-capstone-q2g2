import styled from "styled-components";

export const PayPageStyled = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const PayCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 30px auto;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 5%;

  > button {
    padding: 5px 10px 5px 10px;
    color: var(--darkBlue);
    border: 2px solid var(--darkBlue);
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    svg {
      width: 20px;
      height: auto;
      margin-right: 5px;
    }

    :hover {
      color: var(--mainGray);
      background-color: var(--darkBlue);

      transition: 500ms;
    }
  }
  @media (min-width: 880px) {
    button {
    }
  }
`;

export const BoxTitle = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 15px;
  h2 {
    width: 80%;
    max-width: 800px;
    margin: auto;
    font-size: 18px;
    color: var(--darkBlue);
    font-weight: bold;
    border-bottom: 1px solid var(--darkBlue);
    padding: 10px;
  }
`;
