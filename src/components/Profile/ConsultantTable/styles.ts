import styled from "styled-components";

export const ConsultantTableStyled = styled.section`
  .null-consult {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #606060;
    font-weight: bold;
  }

  .null-consult * {
    margin-top: 15px;
  }

  .null-consult p + svg {
    width: 40px;
    height: 40px;
    color: var(--darkOrange);
  }

  h3 {
    margin-bottom: 20px;
  }

  .table-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 25px auto;
    text-align: center;
    width: 95%;
    max-width: 500px;
    word-wrap: break-word;
  }

  .table-container tr {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .table-container tr:first-child {
    border-bottom: 2px solid var(--darkBlue);
  }

  .table-container th {
    font-weight: bold;
    text-align: center;
    font-size: 14px;
  }

  .table-container td,
  th {
    font-size: 14px;
    padding: 5px 10px;
  }

  .table-container tr td:first-child {
    border-right: 1px solid var(--darkBlue);
    width: 60%;
  }
  .table-container tr th:first-child {
    width: 60%;
  }

  .table-container td svg {
    cursor: pointer;
    color: var(--darkBlue);
    width: 25px;
    height: 25px;
  }

  .table-container td svg:hover {
    cursor: pointer;
    background-color: var(--darkBlue);
    color: var(--mainGray);
    border-radius: 50%;
    border: 1px solid var(--darkBlue);
  }

  .table-container tr th:nth-child(2),
  .table-container tr td:nth-child(2) {
    flex-grow: 1;
  }
`;
