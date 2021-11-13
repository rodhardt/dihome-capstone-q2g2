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
import { MdBookmarkAdded } from "react-icons/md";
import ButtonLogo from "../../assets/Images/ButtonCard.png";
import { useState } from "react";
import ConfirmedModal from "../ConfirmedModal";
import { useHistory } from "react-router";
import { useAuth } from "../../providers/Authentication";

function PropertyCard({ properties, type }: any) {
  const history = useHistory();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const { registerPreviousPage } = useAuth();

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
              <button onClick={() => setIsOpenModal(true)}>
                <MdBookmarkAdded />
              </button>
              <img src={properties.mainImage} alt={"House"} />
            </ImgHouse>
            <InfosCard>
              <p>{properties.district}</p>
              <p>
                {" "}
                Casa em {""}
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
              <button>
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
