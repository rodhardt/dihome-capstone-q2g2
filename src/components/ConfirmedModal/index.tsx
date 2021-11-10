import { ConfirmedModalStyled } from "./styles";
import { ModalData } from "../../assets/Types/modal";

import { useState } from "react";

interface ModalProps {
  modalContent: ModalData;
}

function ConfirmedModal({ modalContent }: ModalProps) {
  const [inputValue, setInputValue] = useState("");

  const { closeFunction } = modalContent;

  return (
    <ConfirmedModalStyled>
      <div className="modal-card">
        <header>
          <h4>{modalContent.title}Título</h4>
          <button className="close-button" onClick={() => closeFunction()}>
            X
          </button>
        </header>
        <p>{modalContent.message}</p>
        {!!modalContent.textareaPlaceholder ? (
          <div className="input-container">
            <textarea
              value={inputValue}
              placeholder="Digite aqui"
              onChange={(evt) => setInputValue(evt.target.value)}
            />
          </div>
        ) : null}
        <div className="buttons-container">
          {!!modalContent.confirmButton ? (
            <button
              className="confirm-button"
              onClick={() => {
                modalContent.confirmButton?.confirmFunction();
                closeFunction();
              }}
            >
              {modalContent.confirmButton.confirmText}
            </button>
          ) : null}
          {!!modalContent.cancelButton ? (
            <button
              className="cancel-button"
              onClick={() => {
                modalContent.cancelButton?.cancelFunction();
                closeFunction();
              }}
            >
              {modalContent.cancelButton.cancelText}
            </button>
          ) : null}
        </div>
      </div>
    </ConfirmedModalStyled>
  );
}

export default ConfirmedModal;
