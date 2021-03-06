import { useState } from "react";
import { useHistory } from "react-router-dom";

import { UserCardStyled } from "./styles";
import { useAuth } from "../../../providers/Authentication";

import { AiFillStar } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";

import UserEdit from "../UserEdit";

function UserCard() {
  const [isEditing, setIsEditing] = useState(false);

  const { userInfo } = useAuth();
  const history = useHistory();

  const closeModal = () => {
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? <UserEdit closeModal={closeModal} /> : null}
      <UserCardStyled>
        <div className="user-container">
          <div className="image-container">
            <img
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt="profile-icon"
            />
          </div>
          <div className="user-info">
            <h3>Nome: {userInfo.name}</h3>
            <h3>E-mail: {userInfo.email}</h3>
            <h3>Telefone: {userInfo.telephone}</h3>
          </div>
        </div>
        <div className="tags-container">
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Editar
          </button>
          {userInfo?.subscriptionType !== "Nenhum" ? (
            <div className="user-plan subscribe">
              <AiFillStar />
              {userInfo.subscriptionType}
            </div>
          ) : (
            <div
              className="user-plan subscribe"
              onClick={() => history.push("/planos")}
            >
              <BsPencilSquare />
              Assine
            </div>
          )}
        </div>
      </UserCardStyled>
    </>
  );
}

export default UserCard;
