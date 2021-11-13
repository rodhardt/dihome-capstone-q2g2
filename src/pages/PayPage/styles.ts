import styled from "styled-components";

export const PayPageStyled = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    min-height: 450px;
  }
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

    :hover {
      color: var(--mainGray);
      background-color: var(--darkBlue);
      border: 4px solid var(--darkBlue);

      transition: 500ms;
    }
  }
`;

export const BoxTitle = styled.div`
  text-align: center;

  margin-top: 5%;
`;
