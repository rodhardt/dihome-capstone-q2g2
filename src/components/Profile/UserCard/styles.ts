import styled from "styled-components";

export const UserCardStyled = styled.section`
  display: flex;
  flex-direction: column;
  border-bottom: 3px solid var(--mainGray);
  padding: 20px;
  width: 100%;
  margin: auto;

  .user-container {
    display: flex;
    align-items: center;
  }

  .image-container {
    width: 80px;
    height: 80px;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  .user-info {
    margin-left: 20px;
  }

  h3 {
    font-size: 12px;
  }

  .tags-container {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }

  .edit-button {
    background-color: var(--darkBlue);
    color: var(--mainGray);
    width: 110px;
    height: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    border: none;
  }

  .edit-button:hover {
    background-color: var(--opacityBlue);
    color: var(--darkBlue);
    font-weight: bold;
  }

  .user-plan {
    width: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: var(--darkBlue);
    border-bottom: 2px solid var(--darkBlue);
    box-shadow: 0px 5px 2px -2px rgba(0, 0, 0, 0.25);
  }

  .user-plan svg {
    margin-right: 5px;
  }

  .subscribe:hover {
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
  }

  @media screen and (min-width: 520px) {
    width: 90%;
    max-width: 700px;

    h3 {
      font-size: 16px;
    }
  }
`;
