import { ConfirmedModalStyled } from "./styles";
import { ModalData } from "../../assets/Types/modal";

interface ModalProps {
  modalContent: ModalData;
}

function ConfirmedModal() {
  return (
    <ConfirmedModalStyled>
      <div className="modal-card">
        <header>
          <h4>Título</h4>
          <button className="close-button">X</button>
        </header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          commodi harum quia ducimus nisi consectetur similique, et suscipit, ea
          aliquid iusto omnis expedita! Dolores repellendus, dolorem iure
          consequuntur veniam aperiam.
        </p>
        <div className="input-container">
          <textarea placeholder="Digite aqui" />
        </div>
        <div className="buttons-container">
          <button className="confirm-button">Confirmar</button>
          <button className="cancel-button">Cancelar</button>
        </div>
      </div>
    </ConfirmedModalStyled>
  );
}

export default ConfirmedModal;
