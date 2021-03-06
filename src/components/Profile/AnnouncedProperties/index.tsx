import { useState } from "react";
import { useHistory } from "react-router-dom";

import { AnnouncedPropertiesStyled } from "./styles";

import { useAuth } from "../../../providers/Authentication";
import { useProperties } from "../../../providers/Properties";
import { GoMegaphone } from "react-icons/go";
import { ImDropbox } from "react-icons/im";

import ConfirmedModal from "../../ConfirmedModal";
import AnnounceFormModal from "../AnnounceFormModal";
import PropertyCard from "../../PropertyCard";

function AnnouncedProperties() {
  const { userInfo } = useAuth();
  const { properties } = useProperties();
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

  const [renderAtt, setRenderAtt] = useState(0);
  const userSchedule = userInfo.markedDates;

  return (
    <>
      {isAnnouncingAttempt && <ConfirmedModal modalContent={modalContent} />}
      {isAnnouncingViable && (
        <AnnounceFormModal closeWindow={closeAnnounceWindow} />
      )}
      <AnnouncedPropertiesStyled>
            {userInfo.markedDates?.length > 0 && (
            <div className="table-container">
                <h3>Visitas agendadas</h3>
                <table>
                <tr>
                  <th>Título</th>
                  <th>Data e hora</th>
                  <th>Local</th>
                </tr>
                {userSchedule?.map((data, index) => (
                  <tr key={index}>
                    <td>{data.split(',')[0]}</td>
                    <td>{data.split(',')[1]}</td>
                    <td>{data.split(',')[2]}</td>
                  </tr>
                ))}
              </table>
            </div>
            )
          }
        {userInfo.announcedProperties?.length > 0 ? (
          <>
            <button
              className="announce-now"
              onClick={() =>
                userInfo.subscriptionType === "Nenhum"
                  ? setIsAnnouncingAttempt(true)
                  : setIsAnnouncingViable(true)
              }
            >
              <GoMegaphone />
              Anuncie Já!
            </button>

            <h2>Meus Anúncios</h2>
            <ul>
              {properties.map((property, index) => (
                <>
                  {userInfo.announcedProperties?.includes(property.id || 0) &&
                  property.consultantStatus === "aprovado" ? (
                    <li key={index}>
                      <PropertyCard
                        properties={property}
                        type="DashBoard"
                        setRenderAtt={setRenderAtt}
                        renderAtt={renderAtt}
                      />
                    </li>
                  ) : null}
                </>
              ))}
            </ul>
            <div className="table-container">
              <h3>Performance</h3>
              <table>
                <tr>
                  <th>Nome</th>
                  <th>Acessos</th>
                  <th>Salvos</th>
                </tr>
                {properties.map((property, index) => (
                  <>
                    {userInfo.announcedProperties?.includes(
                      property.id || 0
                    ) ? (
                      <tr key={index}>
                        <td>{property.title}</td>
                        <td>{property.viewsCount}</td>
                        <td>{property.bookmarkCount}</td>
                      </tr>
                    ) : null}
                  </>
                ))}
              </table>
            </div>

            {properties.filter(
              (property) =>
                userInfo.announcedProperties.includes(property.id || 0) &&
                property.consultantStatus !== "aprovado"
            ).length > 0 ? (
              <div className="table-container status">
                <h3>Anúncios em Análise</h3>
                <table>
                  <tr>
                    <th>Nome</th>
                    <th>Status</th>
                    <th>Comentário</th>
                  </tr>
                  {properties.map((property, index) => (
                    <>
                      {userInfo.announcedProperties?.includes(
                        property.id || 0
                      ) && property.consultantStatus !== "aprovado" ? (
                        <tr key={index}>
                          <td>{property.title}</td>
                          <td>aguardando análise</td>
                          <td>...</td>
                        </tr>
                      ) : null}
                    </>
                  ))}
                </table>
              </div>
            ) : null}
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
