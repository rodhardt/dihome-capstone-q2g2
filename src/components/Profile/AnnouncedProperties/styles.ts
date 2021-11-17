import styled from "styled-components";

export const AnnouncedPropertiesStyled = styled.section`
  width: 95%;
  margin: 30px auto;
  max-width: 700px;

  h2 {
    text-align: center;
    font-size: 18px;
    margin: 15px auto;
  }

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

  .null-announced button,
  .announce-now {
    color: var(--darkBlue);
    border: 2px solid var(--darkBlue);
    border-radius: 7px;
    background-color: #ffffff00;
    display: flex;
    align-items: center;
    padding: 2px 6px;
  }
  .null-announced button svg,
  .announce-now svg {
    margin: 0 5px 0 0;
  }

  .null-announced button:hover,
  .announce-now:hover {
    color: white;
    background-color: var(--darkBlue);
  }

  .table-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 25px auto;
    text-align: center;
    word-wrap: break-word;
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
    font-size: 12px;
  }

  .table-container td,
  th {
    width: 100px;
    font-size: 12px;
    padding: 5px 10px;
  }

  .table-container tr td:first-child {
    border-right: 1px solid var(--darkBlue);
  }

  .table-container tr td:last-child {
    border-left: 1px solid var(--darkBlue);
  }

  .table-container tr th:first-child,
  .table-container tr td:first-child {
    flex-grow: 0.5;
  }
`;
