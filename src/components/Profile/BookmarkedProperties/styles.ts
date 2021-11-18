import styled from "styled-components";

export const BookmarkedPropertiesStyled = styled.section`
  width: 95%;
  max-width: 700px;
  margin: auto;

  h3 {
    text-align: center;
    color: var(--darkGray);
    margin-bottom: 20px;
  }

  .null-bookmarked {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #606060;
    font-weight: bold;
  }

  .null-bookmarked * {
    margin-top: 15px;
  }

  .null-bookmarked p + svg {
    width: 40px;
    height: 40px;
  }

  .null-bookmarked button {
    color: var(--orange);
    border: 2px solid var(--orange);
    border-radius: 7px;
    background-color: #ffffff00;
    display: flex;
    align-items: center;
    padding: 2px 6px;
  }
  .null-bookmarked button svg {
    margin: 0 5px 0 0;
  }

  .null-bookmarked button:hover {
    color: white;
    background-color: var(--lightOrange);
  }
`;
