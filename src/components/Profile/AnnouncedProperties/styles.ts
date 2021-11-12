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
`;
