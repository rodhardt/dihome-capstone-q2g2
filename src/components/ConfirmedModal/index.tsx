import { ConfirmedModalStyled } from "./styles";

interface ModalProps {}

function ConfirmedModal() {
  return (
    <ConfirmedModalStyled>
      <div className="modal-card">
        <header>
          <h4>Título</h4>
          <button className="close-button">X</button>
        </header>
        <p>Mensagem para o usuário</p>
        <div className="buttons-container">
          <button className="confirm-button">Ok</button>
          <button className="cancel-button">Cancelar</button>
        </div>
      </div>
    </ConfirmedModalStyled>
  );
}

export default ConfirmedModal;
