import styled from "styled-components";

export const PayCardStyled = styled.div`
  width: 90%;
  height: 130px;

  background-color: #dddddd;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > button {
    width: 35%;

    border: none;
    border-radius: 5px;
    background-color: var(--darkBlue);
    color: var(--mainGray);

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    width: 65px;
    height: 65px;
    margin-top: 20px;
  }

  > ul {
    li {
      list-style: none;
      font-size: 13px;
    }
  }
`;

export const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
