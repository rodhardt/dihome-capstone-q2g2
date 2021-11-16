import {
  ContainerGlobal,
  ContainerPropertyCard,
  HeaderCard,
  HousePrice,
  ImgHouse,
  InfosCard,
  InfosHouse,
  SmallCardHeader,
  SmallCardInfo,
  SmallContainer,
  SmallInfos,
} from "./styles";
import { MdOutlineBathroom } from "react-icons/md";
import { BiBed } from "react-icons/bi";
import { GiHomeGarage } from "react-icons/gi";
import { RiRuler2Line } from "react-icons/ri";

import ButtonLogo from "../../assets/Images/ButtonCard.png";
import { useState } from "react";
import ConfirmedModal from "../ConfirmedModal";
import { useHistory } from "react-router";
import { useAuth } from "../../providers/Authentication";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";

function PropertyCard({ properties, type, setRenderAtt, renderAtt }: any) {
  const history = useHistory();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const { registerPreviousPage, authToken, userInfo, updateUser } = useAuth();
  const modalInformation = {
    title: "Atenção",
    closeFunction: () => setIsOpenModal(false),
    message: "Voce não esta logado!",
    confirmButton: {
      confirmText: "Logar",
      confirmFunction: () => {
        registerPreviousPage();
        history.push("/login");
      },
    },
    cancelButton: {
      cancelText: "Sair",
      cancelFunction: () => console.log("sair"),
    },
  };
  const handleUpdateUser = () => {
    let newUser = userInfo;

    const filterUser = newUser.bookmarkedProperties.filter(
      (item) => item === properties.id
    );

    if (!(filterUser.length > 0)) {
      newUser.bookmarkedProperties.push(properties.id);
      updateUser(newUser);
      setRenderAtt(renderAtt + 1);
    } else {
      newUser.bookmarkedProperties = newUser.bookmarkedProperties.filter(
        (item) => item !== properties.id
      );
      updateUser(newUser);
      setRenderAtt(renderAtt + 1);
    }
  };

  return (
    <>
      {isOpenModal && <ConfirmedModal modalContent={modalInformation} />}
      <ContainerGlobal>
        {type === "DashBoard" && (
          <ContainerPropertyCard>
            <HeaderCard>
              <p>{properties.goal}</p>
              <p>{properties.type}</p>
            </HeaderCard>
            <ImgHouse>
              <button
                onClick={() =>
                  authToken.length > 0
                    ? handleUpdateUser()
                    : setIsOpenModal(true)
                }
              >
                {userInfo.bookmarkedProperties &&
                userInfo.bookmarkedProperties.find(
                  (item) => item === properties.id
                ) ? (
                  <AiTwotoneStar />
                ) : (
                  <AiOutlineStar />
                )}
              </button>
              <img src={properties.mainImage} alt={"House"} />
            </ImgHouse>
            <InfosCard>
              <p>{properties.district}</p>
              <p>
                {" "}
                {properties.type} em {""}
                {properties.city}-{properties.state}
              </p>
              <InfosHouse>
                <MdOutlineBathroom />
                <p>{properties.bathrooms} Banheiros</p>
              </InfosHouse>
              <InfosHouse>
                <BiBed />
                <p>{properties.dorms} Quartos</p>
              </InfosHouse>
              <InfosHouse>
                <GiHomeGarage />
                <p>{properties.parking} Vagas</p>
              </InfosHouse>
              <InfosHouse>
                <RiRuler2Line />
                <p>{properties.houseArea} Metros²</p>
              </InfosHouse>
            </InfosCard>
            <HousePrice>
              <button onClick={() => history.push(`/imovel/${properties.id}`)}>
                <img src={ButtonLogo} alt="Botão" />
              </button>
              <p>R$ {properties.price.toLocaleString()}</p>
            </HousePrice>
          </ContainerPropertyCard>
        )}
        {type === "HomePage" && (
          <SmallContainer>
            <img src={properties.mainImage} alt={"House"} />
            <SmallInfos>
              <SmallCardHeader>
                <p>
                  {properties.city}-{properties.state}
                </p>
              </SmallCardHeader>
              <SmallCardInfo>
                <MdOutlineBathroom />
                <p>{properties.bathrooms} Banheiros</p>
              </SmallCardInfo>
              <SmallCardInfo>
                <BiBed />
                <p>{properties.dorms} Quartos</p>
              </SmallCardInfo>
              <SmallCardInfo>
                <GiHomeGarage />
                <p>{properties.parking} Vagas</p>
              </SmallCardInfo>
              <SmallCardInfo>
                <RiRuler2Line />
                <p>{properties.houseArea} Metros²</p>
              </SmallCardInfo>
            </SmallInfos>
          </SmallContainer>
        )}
      </ContainerGlobal>
    </>
  );
}

export default PropertyCard;
