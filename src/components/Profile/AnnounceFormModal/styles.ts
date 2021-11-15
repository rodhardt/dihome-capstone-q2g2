import styled from "styled-components";

export const AnnounceFormModalStyled = styled.div`
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
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--mainGray);
    width: 90%;
    min-width: 278px;
    max-width: 520px;
    height: 80%;
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

  .buttons-container {
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: space-around;
    width: 90%;
    max-width: 310px;
    margin-bottom: 20px;
    margin-top: 20px;
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

  .form-container {
    flex-grow: 1;
    padding: 20px;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .input-container input,
  textarea,
  select {
    width: 100%;
    border: 2px solid var(--mainGray);
    border-radius: 10px;
    padding: 5px 10px;
    margin: 5px auto;
    font-size: 12px;
  }

  .input-container input:focus,
  textarea:focus {
    border: 2px solid var(--darkBlue);
  }

  label {
    font-size: 14px;
  }

  .radio {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    padding: 10px 0;
  }
  .radio input {
    width: 12px;
    height: 12px;
    margin: auto;
    margin-right: 5px;
  }

  .radio-option {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
  }

  .radio-option label {
    font-size: 14px;
    flex-grow: 1;
  }

  .type,
  .goal {
    border-bottom: 1px solid var(--lightBlue);
  }

  .number {
    width: 50%;
  }

  .land-area,
  .house-area {
    border-bottom: 1px solid var(--lightBlue);
    padding: 10px 0;
  }
`;
