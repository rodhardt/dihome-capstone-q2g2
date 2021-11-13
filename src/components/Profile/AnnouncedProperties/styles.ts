import styled from "styled-components";

export const AnnouncedPropertiesStyled = styled.section`
  .null-announced {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #606060;
    font-weight: bold;
  }

  .null-announced * {
    margin-top: 15px;
  }

  .null-announced p + svg {
    width: 40px;
    height: 40px;
  }

  .null-announced button {
    color: var(--darkBlue);
    border: 2px solid var(--darkBlue);
    border-radius: 7px;
    background-color: #ffffff00;
    display: flex;
    align-items: center;
    padding: 2px 6px;
  }
  .null-announced button svg {
    margin: 0 5px 0 0;
  }

  .null-announced button:hover {
    color: white;
    background-color: var(--darkBlue);
  }

  .table-container {
    display: flex;
    justify-content: space-around;
    margin: 25px auto;
    text-align: center;
  }

  .table-container tr {
    display: flex;
    justify-content: space-around;
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
    width: 80px;
    font-size: 14px;
    padding: 5px 0;
  }

  .table-container tr td:first-child {
    border-right: 1px solid var(--darkBlue);
  }

  .table-container tr td:last-child {
    border-left: 1px solid var(--darkBlue);
  }
`;
