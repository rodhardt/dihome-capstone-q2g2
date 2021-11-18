import {
  ContainerGlobal,
  ContainerPropertyCard,
  Description,
  HeaderCard,
  HousePrice,
  ImgHouse,
  InfoDescription,
  InfosCard,
  InfosHouse,
  LargeContainer,
  LargeImgHouse,
  LargeInfoHouse,
  LargePrice,
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
import { useEffect, useState } from "react";
import ConfirmedModal from "../ConfirmedModal";
import { useHistory } from "react-router";
import { useAuth } from "../../providers/Authentication";
import { useProperties } from "../../providers/Properties";
import { AiTwotoneStar, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { ImHeart } from "react-icons/im";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PropertyCard({ properties, type, setRenderAtt, renderAtt }: any) {
  const history = useHistory();
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const handleWidth = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
  }, []);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { registerPreviousPage, userInfo, updateUser } = useAuth();
  const { updateProperty } = useProperties();

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
      cancelFunction: () => null,
    },
  };

  const mark = () =>
    toast.success("Imóvel salvo!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const unmark = () =>
    toast.error("Imóvel retirado", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleUpdateUser = (evt: any) => {
    evt.stopPropagation();
    let newUser = userInfo;

    const filterUser = newUser.bookmarkedProperties.filter(
      (item) => item === properties.id
    );

    if (!(filterUser.length > 0)) {
      newUser.bookmarkedProperties.push(properties.id);
      updateUser(newUser);
      setRenderAtt(renderAtt + 1);
      const newPropertyInfo = {
        id: properties.id,
        announcerId: properties.announcerId,
        consultantStatus: properties.consultantStatus,
        announcerStatus: properties.announcerStatus,
        viewsCount: properties.viewsCount,
        bookmarkCount: properties.bookmarkCount + 1,
        title: properties.title,
        street: properties.street,
        state: properties.state,
        city: properties.city,
        district: properties.district,
        number: properties.number,
        type: properties.type,
        goal: properties.goal,
        dorms: properties.dorms,
        parking: properties.parking,
        bathrooms: properties.bathrooms,
        houseArea: properties.houseArea,
        landArea: properties.landArea,
        description: properties.description,
        mainImage: properties.mainImage,
        images: properties.images,
        price: properties.price,
      };
      mark();
      updateProperty(newPropertyInfo);
    } else {
      newUser.bookmarkedProperties = newUser.bookmarkedProperties.filter(
        (item) => item !== properties.id
      );
      updateUser(newUser);
      setRenderAtt(renderAtt + 1);
      const newPropertyInfo = {
        id: properties.id,
        announcerId: properties.announcerId,
        consultantStatus: properties.consultantStatus,
        announcerStatus: properties.announcerStatus,
        viewsCount: properties.viewsCount,
        bookmarkCount: properties.bookmarkCount - 1,
        title: properties.title,
        street: properties.street,
        state: properties.state,
        city: properties.city,
        district: properties.district,
        number: properties.number,
        type: properties.type,
        goal: properties.goal,
        dorms: properties.dorms,
        parking: properties.parking,
        bathrooms: properties.bathrooms,
        houseArea: properties.houseArea,
        landArea: properties.landArea,
        description: properties.description,
        mainImage: properties.mainImage,
        images: properties.images,
        price: properties.price,
      };
      unmark();
      updateProperty(newPropertyInfo);
    }
  };

  const handleOpenModal = (evt: any) => {
    evt.stopPropagation();
    setIsOpenModal(true);
  };

  return (
    <>
      {isOpenModal && <ConfirmedModal modalContent={modalInformation} />}
      <ContainerGlobal>
        {type === "DashBoard" && screenWidth > 700 ? (
          <LargeContainer
            onClick={() => history.push(`/imovel/${properties.id}`)}
          >
            <HeaderCard></HeaderCard>
            <LargeImgHouse>
              <img src={properties.mainImage} alt={"House"} />
              <button
                onClick={(evt) =>
                  !!userInfo.id ? handleUpdateUser(evt) : handleOpenModal(evt)
                }
              >
                {userInfo.bookmarkedProperties &&
                userInfo.bookmarkedProperties.find(
                  (item) => item === properties.id
                ) ? (
                  <ImHeart className="star-bookmarked" />
                ) : (
                  <ImHeart className="star-unmarked" />
                )}
              </button>
            </LargeImgHouse>

            <Description>
              <InfoDescription>
                <div className="main-info">
                  <p>{properties.goal}</p>
                  <p>{properties.type}</p>
                </div>
                <p className="title">{properties.district}</p>
                <p className="title">
                  {properties.type} em {""}
                  {properties.city}-{properties.state}
                </p>
              </InfoDescription>
              <p>
                <b>Descrição:</b>/{properties.description}
              </p>
            </Description>
            <LargePrice>
              <p>R$ {properties.price.toLocaleString()}</p>
            </LargePrice>
            <LargeInfoHouse>
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
                <div className="area-info">
                  <p>{properties.houseArea} m</p>
                  <p className="square">2</p>
                </div>
              </InfosHouse>
            </LargeInfoHouse>
          </LargeContainer>
        ) : type === "DashBoard" && screenWidth <= 700 ? (
          <ContainerPropertyCard
            onClick={() => history.push(`/imovel/${properties.id}`)}
          >
            <HeaderCard>
              <p>{properties.goal}</p>
              <p>{properties.type}</p>
            </HeaderCard>
            <ImgHouse>
              <img src={properties.mainImage} alt={"House"} />
              <button
                onClick={(evt) =>
                  !!userInfo.id ? handleUpdateUser(evt) : handleOpenModal(evt)
                }
              >
                {userInfo.bookmarkedProperties &&
                userInfo.bookmarkedProperties.find(
                  (item) => item === properties.id
                ) ? (
                  <ImHeart className="star-bookmarked" />
                ) : (
                  <ImHeart className="star-unmarked" />
                )}
              </button>
            </ImgHouse>
            <InfosCard>
              <div>
                <p className="district">{properties.district}</p>
                <p className="address">
                  {properties.city}-{properties.state}
                </p>
              </div>
              <div>
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
                  <p>{properties.houseArea} m</p>
                  <p className="square">2</p>
                </InfosHouse>
              </div>
            </InfosCard>
            <HousePrice>
              <p>R$ {properties.price.toLocaleString()}</p>
            </HousePrice>
          </ContainerPropertyCard>
        ) : null}

        {type === "HomePage" && (
          <SmallContainer
            onClick={() => history.push(`/imovel/${properties.id}`)}
          >
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
