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
  MapSection,
  MaxWidthAdapter,
  PropertyDiscription,
  PropertyInfos,
  PropertyPageStyled,
  TitleAnounce,
  WithoutMapSection,
} from "./styles";
import { useAuth } from "../../providers/Authentication";
import { useEffect, useState } from "react";
import ConfirmedModal from "../../components/ConfirmedModal";
import axios from "axios";
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

interface IdFromUrl {
  id: any;
}

const PropertyPage = () => {
  const history = useHistory()
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenSecondModal, setIsOpenSecondModal] = useState(false);
  const [isOpenThirdModal, setIsOpenThirdModal] = useState(false);

  const [latitude, setLatitude] = useState<any[]>()
  const [longitude, setLongitude] = useState<any[]>()
  
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
  
  const Map = () => {

    axios
    .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${propertyToRender?.street}+${propertyToRender?.number}+${propertyToRender?.district},+${propertyToRender?.city}+${propertyToRender?.state},+CA&key=AIzaSyA2fg_5N-eAH3IKzPQT9FhNYDenHGn31Is`)
    .then((response) => setLatitude(response.data.results[0].geometry.location.lat))
    .catch((error) => console.log('error', error))

    axios
    .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${propertyToRender?.street}+${propertyToRender?.number}+${propertyToRender?.district},+${propertyToRender?.city}+${propertyToRender?.state},+CA&key=AIzaSyA2fg_5N-eAH3IKzPQT9FhNYDenHGn31Is`)
    .then((response) => setLongitude(response.data.results[0].geometry.location.lng))
    .catch((error) => console.log('error', error))

    return (
      <GoogleMap 
        defaultZoom={10} 
        defaultCenter={{lat: latitude, lng: longitude}}
      >
        <Marker position={{lat: latitude, lng: longitude}}/>
      </GoogleMap>
    )
  }

  const WrappedMap = withScriptjs(withGoogleMap(Map))

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


        {!!authToken ? (

          <>
          <h3 style={{ margin: `0px 0px 10px 0px` }}>Localização aproximada.</h3>
        <MapSection className='secao'>
            <WrappedMap 
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA2fg_5N-eAH3IKzPQT9FhNYDenHGn31Is"
                loadingElement={<div style={{ height: `90%`, width: `90%` }} />}
                containerElement={<div style={{ 
                  height: `200px`, 
                  display: `flex`, 
                  alignItems:`center`, 
                  justifyContent: `center` 
                }} 
                />
                }
              mapElement={<div style={{ height: `85%`, width: `85%` }} />}
              />
            </MapSection>
          </>
            ) : (
          <WithoutMapSection>
            <h3>Faça login para ter acesso à localização.</h3>
            <button onClick={() => history.push('/login')}>Login</button>
          </WithoutMapSection>
            )
          }
        <Footer />
      </MaxWidthAdapter>
    </PropertyPageStyled>
  );
};

export default PropertyPage;
