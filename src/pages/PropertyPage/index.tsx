import {
  BsArrowLeftCircle,
  BsCalendarWeek,
  BsFillCalendarCheckFill,
} from "react-icons/bs";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { AiOutlineAim, AiFillCar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaUserCircle, FaBed, FaSink } from "react-icons/fa";
import { RiRulerLine, RiRuler2Line } from "react-icons/ri";

import { MdOutlineLibraryBooks } from "react-icons/md";
import { useHistory, useParams } from "react-router";
import Footer from "../../components/Footer";
import { useProperties } from "../../providers/Properties";
import {
  BackButton,
  ContactOwner,
  Filter,
  ImageBoxes,
  ImagesCarossel,
  Linha,
  MapSection,
  MaxWidthAdapter,
  PropertyDiscription,
  PropertyInfos,
  PropertyPageStyled,
  TimeAndDateModal,
  TitleAnounce,
  WithoutMapSection,
} from "./styles";
import { useAuth } from "../../providers/Authentication";
import { useEffect, useState } from "react";
import ConfirmedModal from "../../components/ConfirmedModal";
import axios from "axios";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import { ConsultantButtons } from "../../components/Consultant/Buttons";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import { UserData } from "../../assets/Types/user";
import LoadingScreen from "../../components/LoadingScreen";
import Header from "../../components/Header";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IdFromUrl {
  id: any;
}

const PropertyPage = () => {
  const history = useHistory();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenSecondModal, setIsOpenSecondModal] = useState(false);
  const [isOpenThirdModal, setIsOpenThirdModal] = useState(false);

  const [latitude, setLatitude] = useState<any[]>();
  const [longitude, setLongitude] = useState<any[]>();

  const { id }: IdFromUrl = useParams();
  const { properties, updateProperty } = useProperties();
  const { userInfo, updateUser, authToken } = useAuth();

  const propertyToRender = properties.find((item) => item.id === Number(id));

  const [renderAtt, setRenderAtt] = useState(1);

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

  const propertyNotFound = () =>
    toast.error("Imóvel não encontrado", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleUpdateUser = () => {
    let newUser = userInfo;

    const filterUser = newUser.bookmarkedProperties.filter(
      (item) => item === propertyToRender?.id
    );

    if (!(filterUser.length > 0) && propertyToRender?.id) {
      newUser.bookmarkedProperties.push(propertyToRender.id);
      updateUser(newUser);
      mark();
      setRenderAtt(renderAtt + 1);
    } else {
      newUser.bookmarkedProperties = newUser.bookmarkedProperties.filter(
        (item) => item !== propertyToRender?.id
      );
      updateUser(newUser);
      unmark();
      setRenderAtt(renderAtt + 1);
    }
  };

  const secondModalInformation = {
    title: "Enviar mensagem",
    closeFunction: () => setIsOpenSecondModal(false),
    message: "Chat: ABRIR CHAT ABAIXO",
    confirmButton: {
      confirmText: "confirmar",
      confirmFunction: () => {},
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
        history.push("/login");
      },
    },
    cancelButton: {
      cancelText: "cancelar",
      cancelFunction: () => {},
    },
  };

  const Map = () => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${propertyToRender?.street}+${propertyToRender?.number}+${propertyToRender?.district},+${propertyToRender?.city}+${propertyToRender?.state},+CA&key=AIzaSyA2fg_5N-eAH3IKzPQT9FhNYDenHGn31Is`
      )
      .then((response) =>
        setLatitude(response.data.results[0].geometry.location.lat)
      )
      .catch((error) => console.log("error", error));

    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${propertyToRender?.street}+${propertyToRender?.number}+${propertyToRender?.district},+${propertyToRender?.city}+${propertyToRender?.state},+CA&key=AIzaSyA2fg_5N-eAH3IKzPQT9FhNYDenHGn31Is`
      )
      .then((response) =>
        setLongitude(response.data.results[0].geometry.location.lng)
      )
      .catch((error) => console.log("error", error));

    return (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: latitude, lng: longitude }}
      >
        <Marker position={{ lat: latitude, lng: longitude }} />
      </GoogleMap>
    );
  };

  const WrappedMap = withScriptjs(withGoogleMap(Map));

  const handleSchedule = () => {
    !authToken ? setIsOpenThirdModal(true) : setIsOpenModal(true);
  };

  const handleChat = () => {
    !authToken ? setIsOpenThirdModal(true) : setIsOpenSecondModal(true);
  };

  const consultantAuthenticate = () => {
    if (
      userInfo.consultant === false &&
      propertyToRender?.consultantStatus === "em aberto"
    ) {
      history.push("/imoveis");
      propertyNotFound();
    } else if (
      userInfo.consultant === undefined &&
      propertyToRender?.consultantStatus === "em aberto"
    ) {
      history.push("/imoveis");
      propertyNotFound();
    }
  };

  const [lastImage, setLastImage] = useState(0);

  useEffect(() => {
    consultantAuthenticate();
    setLastImage(propertyToRender?.images.length || 1);
  }, [propertyToRender]);

  const [isOpenImages, setIsOpenImages] = useState(false);
  const [counterForImages, setCounterForImages] = useState(0);

  const handleOpenImages = () => {
    setIsOpenImages(true);
  };

  const handleAdd = () => {
    if (counterForImages + 1 !== propertyToRender?.images.length) {
      setCounterForImages(counterForImages + 1);
    } else {
      setCounterForImages(0);
    }
  };

  const handleDec = () => {
    if (counterForImages > 0) {
      setCounterForImages(counterForImages - 1);
    } else {
      setCounterForImages(lastImage - 1);
    }
  };

  useEffect(() => {
    if (
      properties.length > 0 &&
      properties.every((property) => property.id !== Number(id))
    ) {
      history.push("/imoveis");
      propertyNotFound();
    }
  }, [properties]);

  useEffect(() => {
    if (
      !properties.every((property) => property.id !== Number(id)) &&
      !!propertyToRender?.id
    ) {
      const newPropertyInfo = {
        id: propertyToRender.id,
        announcerId: propertyToRender.announcerId,
        consultantStatus: propertyToRender.consultantStatus,
        announcerStatus: propertyToRender.announcerStatus,
        viewsCount: propertyToRender.viewsCount + 1,
        bookmarkCount: propertyToRender.bookmarkCount,
        title: propertyToRender.title,
        street: propertyToRender.street,
        state: propertyToRender.state,
        city: propertyToRender.city,
        district: propertyToRender.district,
        number: propertyToRender.number,
        type: propertyToRender.type,
        goal: propertyToRender.goal,
        dorms: propertyToRender.dorms,
        parking: propertyToRender.parking,
        bathrooms: propertyToRender.bathrooms,
        houseArea: propertyToRender.houseArea,
        landArea: propertyToRender.landArea,
        description: propertyToRender.description,
        mainImage: propertyToRender.mainImage,
        images: propertyToRender.images,
        price: propertyToRender.price,
      };
      updateProperty(newPropertyInfo);
    }
  }, [properties.length]);

  const [date, setDate] = useState("");

  const handleCalendar = () => {
    const schedule = [propertyToRender?.title, date];

    const userSchedule = {
      id: userInfo?.id,
      password: userInfo?.password,
      name: userInfo?.name,
      email: userInfo?.email,
      telephone: userInfo?.telephone,
      consultant: userInfo?.consultant,
      announcedProperties: userInfo?.announcedProperties,
      bookmarkedProperties: userInfo?.bookmarkedProperties,
      subscriptionType: userInfo?.subscriptionType,
      markedDates: [...userInfo?.markedDates, date],
    };
    updateUser(userSchedule);
    setIsOpenModal(false);
  };

  return (
    <>
      {isOpenModal ? (
        <>
          <Filter onClick={() => setIsOpenModal(false)}></Filter>
          <TimeAndDateModal>
            <div>
              <div className="header"></div>
              <BsFillCalendarCheckFill />
              <input
                type="datetime-local"
                onChange={(evt) =>
                  setDate(
                    propertyToRender?.title +
                      ", " +
                      evt.target.value +
                      ", " +
                      propertyToRender?.city +
                      " " +
                      propertyToRender?.district
                  )
                }
              />
              <div>
                <button onClick={handleCalendar} className="confirm">
                  agendar
                </button>
                <button onClick={() => setIsOpenModal(false)} className="back">
                  voltar
                </button>
              </div>
            </div>
          </TimeAndDateModal>
        </>
      ) : null}
      <Header />
      {properties.length === 0 && (
        <LoadingScreen type="full" message="Buscando" />
      )}
      <PropertyPageStyled>
        {isOpenSecondModal && (
          <ConfirmedModal modalContent={secondModalInformation} />
        )}
        {isOpenThirdModal && (
          <ConfirmedModal modalContent={thirdModalInformation} />
        )}
        <MaxWidthAdapter>
          <BackButton
            className="back-button"
            onClick={() => history.push("/imoveis")}
          >
            <BsArrowLeftCircle />
            <h2>voltar para imóveis</h2>
          </BackButton>
          {isOpenImages ? (
            <>
              <Filter onClick={() => setIsOpenImages(false)}></Filter>
              <ImagesCarossel>
                <div className="flexRow">
                  <button onClick={handleDec} className="goAndBack">
                    <GrLinkPrevious />
                  </button>
                  <img
                    src={propertyToRender?.images[counterForImages]}
                    alt=""
                  />
                  <button onClick={handleAdd} className="goAndBack">
                    <GrLinkNext />
                  </button>
                </div>
                <div className="counter">
                  {`${counterForImages + 1} de ${
                    propertyToRender?.images.length
                  }`}
                </div>
                <button
                  className="closeButton"
                  onClick={() => setIsOpenImages(false)}
                >
                  fechar
                </button>
              </ImagesCarossel>
            </>
          ) : (
            <ImageBoxes onClick={handleOpenImages}>
              <img
                className="mainImage"
                src={propertyToRender?.mainImage}
                alt=""
              />
              <div className="otherImages">
                <img src={propertyToRender?.images[1]} alt="" />
                <img src={propertyToRender?.images[2]} alt="" />
              </div>
            </ImageBoxes>
          )}

          <TitleAnounce>
            <div className="districtAndTitle">
              <h2>
                <h2>{propertyToRender?.title}</h2>
                {propertyToRender?.district}, {propertyToRender?.city} -{" "}
                {propertyToRender?.state}
              </h2>
            </div>

            {propertyToRender?.consultantStatus === "em aberto" ? (
              <ConsultantButtons propertyToRender={propertyToRender} />
            ) : (
              <button
                onClick={() =>
                  !!userInfo.id ? handleUpdateUser() : setIsOpenThirdModal(true)
                }
              >
                {renderAtt &&
                userInfo.bookmarkedProperties?.find(
                  (item) => item === propertyToRender?.id
                ) ? (
                  <AiTwotoneStar />
                ) : (
                  <AiOutlineStar />
                )}
              </button>
            )}
          </TitleAnounce>
          <ContactOwner>
            <div className="userAndTitle">
              <div className="title">
                <h2>Contate o proprietário.</h2>
              </div>
              <div className="user">
                <FaUserCircle />
                <h3>Joje Lucas</h3>
              </div>
            </div>
            <div className="contact">
              <button onClick={handleSchedule}>
                Quero visitar
                <BsCalendarWeek />
              </button>
              <button onClick={handleChat}>
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
            <div className="propertyList">
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
              <h3 style={{ margin: `0px 0px 10px 0px` }}>
                Localização aproximada.
              </h3>
              <MapSection className="secao">
                <WrappedMap
                  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA2fg_5N-eAH3IKzPQT9FhNYDenHGn31Is"
                  loadingElement={
                    <div style={{ height: `90%`, width: `90%` }} />
                  }
                  containerElement={
                    <div
                      style={{
                        height: `200px`,
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `center`,
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
              <button onClick={() => history.push("/login")}>Login</button>
            </WithoutMapSection>
          )}
        </MaxWidthAdapter>
        <Footer />
      </PropertyPageStyled>
    </>
  );
};

export default PropertyPage;
