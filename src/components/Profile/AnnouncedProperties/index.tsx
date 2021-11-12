import { useState } from "react";
import { useHistory } from "react-router-dom";

import { AnnouncedPropertiesStyled } from "./styles";

import { useAuth } from "../../../providers/Authentication";
import { GoMegaphone } from "react-icons/go";
import { ImDropbox } from "react-icons/im";

import ConfirmedModal from "../../ConfirmedModal";
import AnnounceFormModal from "../AnnounceFormModal";

function AnnouncedProperties() {
  const { userInfo } = useAuth();
  const history = useHistory();

  const [isAnnouncingAttempt, setIsAnnouncingAttempt] = useState(false);
  const [isAnnouncingViable, setIsAnnouncingViable] = useState(false);

  const closeAnnouncingAttempt = () => {
    setIsAnnouncingAttempt(false);
  };

  const closeAnnounceWindow = () => {
    setIsAnnouncingViable(false);
  };

  const modalContent = {
    title: "Atenção!",
    closeFunction: closeAnnouncingAttempt,
    message:
      "Você não assina nenhum de nossos planos. Deseja conhecer nossos planos?",
    confirmButton: {
      confirmText: "Sim",
      confirmFunction: () => history.push("/planos"),
    },
    cancelButton: { cancelText: "Não", cancelFunction: () => null },
  };

  return (
    <>
      {isAnnouncingAttempt && <ConfirmedModal modalContent={modalContent} />}
      {isAnnouncingViable && (
        <AnnounceFormModal closeWindow={closeAnnounceWindow} />
      )}
      <AnnouncedPropertiesStyled>
        {userInfo.announcedProperties?.length > 0 ? (
          <>
            <button
              onClick={() =>
                userInfo.subscriptionType === "Nenhum"
                  ? setIsAnnouncingAttempt(true)
                  : setIsAnnouncingViable(true)
              }
            >
              <GoMegaphone />
              Anuncie Já!
            </button>
            <ul>
              {userInfo.announcedProperties?.map((property, index) => (
                <li key={index}>cards</li>
              ))}
            </ul>
          </>
        ) : (
          <div className="null-announced">
            <p>Você não anunciou nenhum imóvel.</p>
            <ImDropbox />
            <button
              onClick={() =>
                userInfo.subscriptionType === "Nenhum"
                  ? setIsAnnouncingAttempt(true)
                  : setIsAnnouncingViable(true)
              }
            >
              <GoMegaphone />
              Anuncie Já!
            </button>
          </div>
        )}
      </AnnouncedPropertiesStyled>
    </>
  );
}

export default AnnouncedProperties;
