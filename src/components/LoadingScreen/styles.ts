import styled from "styled-components";

export const LoadingScreenStyled = styled.div`
  width: 100%;
  height: 100%;

  .full-container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 6;
    background-color: #ffffff90;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .full-card {
    background-color: var(--orange);
    color: white;
    font-weight: bold;
    width: 90%;
    min-width: 278px;
    max-width: 520px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 15px;
  }

  .partial-container {
    width: 100%;
    height: 100%;
    margin: auto;
    z-index: 6;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .partial-card {
    color: var(--darkBlue);
    font-weight: bold;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
  }
`;
