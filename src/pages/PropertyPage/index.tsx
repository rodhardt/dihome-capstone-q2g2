import { BsArrowLeftCircle, BsCalendarWeek } from "react-icons/bs";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { AiOutlineAim, AiFillCar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaUserCircle, FaBed, FaSink } from "react-icons/fa";
import { RiRulerLine, RiRuler2Line } from "react-icons/ri";
import { MdBookmarkAdded } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { useParams } from "react-router";
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

interface IdFromUrl {
  id: any;
}

const PropertyPage = () => {
  const { id }: IdFromUrl = useParams();

  const { properties } = useProperties();

  const propertyToRender = properties.find((item) => item.id == id);

  console.log(propertyToRender);

  return (
    <PropertyPageStyled>
      <MaxWidthAdapter>
        <BackButton>
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
          <button onClick={() => console.log("save")}>
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
            <button>
              Quero visitar
              <BsCalendarWeek />
            </button>
            <button>
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
