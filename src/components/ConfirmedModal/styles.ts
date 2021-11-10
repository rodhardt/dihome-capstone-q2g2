import styled from "styled-components";

export const ConfirmedModalStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: #00000080;

  .modal-card {
    z-index: 4;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--mainGray);
    width: 90%;
    min-width: 278px;
    max-width: 520px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
  }

  .modal-card header {
    background-color: var(--darkBlue);
    color: var(--mainGray);
    width: 100%;
  }

  .modal-card header h4 {
    width: 100%;
    text-align: center;
  }

  .modal-card .close-button {
  }

  .modal-card p {
    color: black;
  }

  .modal-card .confirm-button {
    background-color: var(--darkBlue);
    color: var(--mainGray);
  }

  .modal-card .cancel-button {
    background-color: var(--mainGray);
    color: black;
  }
`;
