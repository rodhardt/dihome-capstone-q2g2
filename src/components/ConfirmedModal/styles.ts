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
    border-radius: 15px;
  }

  .modal-card header {
    background-color: var(--darkBlue);
    color: var(--mainGray);
    width: 100%;
    display: flex;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  .modal-card header h4 {
    width: 100%;
    text-align: center;
    padding: 5px;
    padding-left: 15px;
  }

  .modal-card .close-button {
    border: none;
    background-color: var(--darkBlue);
    color: var(--mainGray);
    padding: 5px;
    padding-right: 15px;
    border-top-right-radius: 15px;
  }

  .modal-card .close-button:hover {
    font-weight: bold;
  }

  .modal-card p {
    color: black;
    flex-grow: 1;
    display: flex;
    align-items: center;
    padding: 20px;
  }

  .modal-card .input-container {
    padding: 0px 20px 15px;
    height: 150px;
  }

  .modal-card textarea {
    width: 100%;
    height: 100%;
  }

  .modal-card input::placeholder {
  }

  .buttons-container {
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: space-around;
    width: 90%;
    max-width: 310px;
    margin-bottom: 20px;
  }

  .buttons-container button {
    width: 120px;
    height: 40px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    border: none;
  }

  .modal-card .confirm-button {
    background-color: var(--darkBlue);
    color: var(--mainGray);
  }

  .modal-card .confirm-button:hover {
    background-color: var(--opacityBlue);
    color: var(--darkBlue);
    font-weight: bold;
  }

  .modal-card .cancel-button {
    background-color: var(--mainGray);
    color: black;
  }

  .modal-card .cancel-button:hover {
    background-color: #00000060;
    color: var(--mainGray);
  }
`;
