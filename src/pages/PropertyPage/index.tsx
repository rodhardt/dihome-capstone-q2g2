import { BsArrowLeftCircle, BsCalendarWeek } from "react-icons/bs";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { AiOutlineAim, AiFillCar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaUserCircle, FaBed, FaSink } from "react-icons/fa";
import { RiRulerLine, RiRuler2Line } from "react-icons/ri";
import { MdBookmarkAdded } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { useHistory, useParams } from "react-router";
import Footer from "../../components/Footer";
import { useProperties } from "../../providers/Properties";
import {
  BackButton,
  ContactOwner,
  ImageBoxes,
  Linha,
  MaxWidthAdapter,
  PropertyDiscription,
  PropertyInfos,
  PropertyPageStyled,
  TitleAnounce,
} from "./styles";
import { useAuth } from "../../providers/Authentication";
import { useState } from "react";
import ConfirmedModal from "../../components/ConfirmedModal";

interface IdFromUrl {
  id: any;
}

const PropertyPage = () => {
  const history = useHistory()
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenSecondModal, setIsOpenSecondModal] = useState(false);
  const [isOpenThirdModal, setIsOpenThirdModal] = useState(false);
  
  const { id }: IdFromUrl = useParams();
  const { properties } = useProperties();
  const { userInfo, updateUser, authToken } = useAuth()

  const propertyToRender = properties.find((item) => item.id == id);

  const handleBookmark = () => {
    (!authToken ? 
      (setIsOpenThirdModal(true)
      ) : (
        (userInfo.bookmarkedProperties.find((item) => item == id) === undefined) ? (
           updateUser({ 
             id: userInfo.id,
             password: userInfo.password,
             name: userInfo.name,
             email: userInfo.email,
             telephone: userInfo.telephone,
             consultant: userInfo.consultant,
             announcedProperties: userInfo.announcedProperties,
             bookmarkedProperties: [...userInfo.bookmarkedProperties, id],
             subscriptionType: userInfo.subscriptionType
           })
           ) : (
           updateUser({
               id: userInfo.id,
             password: userInfo.password,
             name: userInfo.name,
             email: userInfo.email,
             telephone: userInfo.telephone,
             consultant: userInfo.consultant,
             announcedProperties: userInfo.announcedProperties,
             bookmarkedProperties: userInfo.bookmarkedProperties.filter((item) => item !== id),
             subscriptionType: userInfo.subscriptionType
             })
           )
       )
     )
  }

  const modalInformation = {
    title: "Agendar visita",
    closeFunction: () => setIsOpenModal(false),
    message: "Escolha a data e hora da visita: CALENDÁRIO ABAIXO",
    confirmButton: {
      confirmText: "confirmar",
      confirmFunction: () => {
      },
    },
    cancelButton: {
      cancelText: "cancelar",
      cancelFunction: () => {},
    },
  };

  const secondModalInformation = {
    title: "Enviar mensagem",
    closeFunction: () => setIsOpenSecondModal(false),
    message: "Chat: ABRIR CHAT ABAIXO",
    confirmButton: {
      confirmText: "confirmar",
      confirmFunction: () => {
      },
    },
    cancelButton: {
      cancelText: "cancelar",
      cancelFunction: () => {},
    },
  };

  const thirdModalInformation = {
    title: "Você não está logado!",
    closeFunction: () => setIsOpenThirdModal(false),
    message: "Faça login para conseguir completar esta ação.",
    confirmButton: {
      confirmText: "Login",
      confirmFunction: () => {
        history.push('/login')
      },
    },
    cancelButton: {
      cancelText: "cancelar",
      cancelFunction: () => {},
    },
  };

  return (
    <PropertyPageStyled>
       {isOpenModal && <ConfirmedModal modalContent={modalInformation} />}
       {isOpenSecondModal && <ConfirmedModal modalContent={secondModalInformation} />}
       {isOpenThirdModal && <ConfirmedModal modalContent={thirdModalInformation} />}
      <MaxWidthAdapter>
        <BackButton onClick={() => history.push('/imoveis')}>
          <BsArrowLeftCircle />
          <h2>voltar para imóveis</h2>
        </BackButton>
        <ImageBoxes>
          <img className="mainImage" src={propertyToRender?.mainImage} alt="" />
          <div className="otherImages">
            <img src={propertyToRender?.images[1]} alt="" />
            <img src={propertyToRender?.images[2]} alt="" />
          </div>
        </ImageBoxes>
        <TitleAnounce>
          <div className="districtAndTitle">
            <h2>
              <h2>{propertyToRender?.title}</h2>
              {propertyToRender?.district}, {propertyToRender?.city} -{" "}
              {propertyToRender?.state}
            </h2>
          </div>
          <button onClick={handleBookmark}>
            <MdBookmarkAdded />
          </button>
        </TitleAnounce>
        <ContactOwner>
          <div className='userAndTitle'>
            <div className="title">
              <h2>Contate o proprietário.</h2>
            </div>
            <div className="user">
              <FaUserCircle />
              <h3>Joje Lucas</h3>
            </div>
          </div>
          <div className="contact">
            <button onClick={() => setIsOpenModal(true)}>
              Quero visitar
              <BsCalendarWeek />
            </button>
            <button onClick={() => setIsOpenSecondModal(true)}>
              Enviar mensagem
              <FiSend />
            </button>
          </div>
        </ContactOwner>
        <Linha></Linha>
        <PropertyInfos>
          <div>
            <IoDocumentTextOutline />
            <h2>Sobre o imóvel</h2>
          </div>
          <div className='propertyList'>
            <ul>
              <li>
                <MdOutlineMapsHomeWork />
                Tipo: {propertyToRender?.type}
              </li>
              <li>
                <AiOutlineAim />
                Objetivo: {propertyToRender?.goal}
              </li>
              <li>
                <FaBed />
                {propertyToRender?.dorms} quartos
              </li>
              <li>
                <AiFillCar />
                {propertyToRender?.parking} vagas
              </li>
            </ul>
            <ul>
              <li>
                <FaSink />
                {propertyToRender?.bathrooms} banheiros
              </li>
              <li>
                <RiRulerLine />
                {propertyToRender?.houseArea}m² área constuída
              </li>
              <li>
                <RiRuler2Line />
                {propertyToRender?.landArea}m² área do terreno
              </li>
            </ul>
          </div>
        </PropertyInfos>
        <PropertyDiscription>
          <div>
            <MdOutlineLibraryBooks />
            <h2>Descrição</h2>
          </div>
          <div>
            <p>{propertyToRender?.description}</p>
          </div>
        </PropertyDiscription>
        <section>MAPA!!!!!!!!!!!!</section>
        <Footer />
      </MaxWidthAdapter>
    </PropertyPageStyled>
  );
};

export default PropertyPage;
