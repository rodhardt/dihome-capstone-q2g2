import { useState } from "react";
import { UserEditStyled } from "./styles";

import { useAuth } from "../../../providers/Authentication";

interface UserEditProps {
  closeModal: () => void;
}

function UserEdit({ closeModal }: UserEditProps) {
  const { userInfo, updateUser } = useAuth();

  const [inputName, setInputName] = useState(userInfo.name);
  const [inputEmail, setInputEmail] = useState(userInfo.email);
  const [inputTelephone, setInputTelephone] = useState(userInfo.telephone);

  const handleInputName = () => {
    if (inputName === userInfo.name) {
      setInputName("");
    }
  };
  const handleInputEmail = () => {
    if (inputEmail === userInfo.email) {
      setInputEmail("");
    }
  };
  const handleInputTelephone = () => {
    if (inputTelephone === userInfo.telephone) {
      setInputTelephone("");
    }
  };

  const submitChanges = () => {
    const newUserInfo = {
      id: userInfo.id,
      name: inputName,
      email: inputEmail,
      telephone: inputTelephone,
      consultant: userInfo.consultant,
      announcedProperties: userInfo.announcedProperties,
      bookmarkedProperties: userInfo.bookmarkedProperties,
      subscriptionType: userInfo.subscriptionType,
    };
    updateUser(newUserInfo);
  };

  return (
    <UserEditStyled>
      <div className="modal-card">
        <header>
          <h4>Alterar Informações</h4>

          <button className="close-button" onClick={() => closeModal()}>
            X
          </button>
        </header>
        <div className="form-container">
          <div className="input-container">
            <label htmlFor="input-name">Nome</label>
            <input
              id="input-name"
              value={inputName}
              onClick={() => handleInputName()}
              onChange={(evt) => setInputName(evt.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="input-email">E-mail</label>
            <input
              id="input-email"
              value={inputEmail}
              onClick={() => handleInputEmail()}
              onChange={(evt) => setInputEmail(evt.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="input-telephone">Telefone</label>
            <input
              id="input-telephone"
              value={inputTelephone}
              onClick={() => handleInputTelephone()}
              onChange={(evt) => setInputTelephone(evt.target.value)}
            />
          </div>
        </div>
        <div className="buttons-container">
          <button
            className="confirm-button"
            onClick={() => {
              submitChanges();
              closeModal();
            }}
          >
            Alterar
          </button>
          <button
            className="cancel-button"
            onClick={() => {
              closeModal();
            }}
          >
            cancelar
          </button>
        </div>
      </div>
    </UserEditStyled>
  );
}

export default UserEdit;
