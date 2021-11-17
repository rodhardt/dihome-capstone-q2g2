import PropertyCard from "../../components/PropertyCard";
import { useProperties } from "../../providers/Properties";
import {
  ButtonHome1,
  ButtonHome2,
  ContainerHome,
  ContentHome,
  HomepageStyled,
  Infos,
  Unstyled,
  Unstyled2,
  PropertyList,
  ImgCity,
} from "./styles";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdMapsHomeWork } from "react-icons/md";
import adverts from "../../assets/Images/adverts.png";
import letter from "../../assets/Images/Letter.png";
import coin from "../../assets/Images/coin.png";
import ImageChat from "../../assets/Images/ImageChat.png";
import styleComponentRigth from "../../assets/Images/styleComponentRigth.png";
import ImageCityHome from "../../assets/Images/ImageCityHome.png";
import LogoBannerHome from "../../assets/Images/LogoBannerHome.png";
import styleComponentLefth from "../../assets/Images/styleComponentLefth.png";
import Footer from "../../components/Footer";
import { useAuth } from "../../providers/Authentication";
import Header from "../../components/Header";
import LoadingScreen from "../../components/LoadingScreen";

function Homepage() {
  const { properties } = useProperties();
  const { userInfo } = useAuth();
  const history = useHistory();

  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  const handleWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidth);
  }, []);

  return (
    <>
      <Header />
      <HomepageStyled>
        <img src={LogoBannerHome} alt="banner" />
        <ContainerHome>
          <ButtonHome1>
            <Button
              onClick={() => history.push("/imoveis")}
              startIcon={<FaHome />}
              variant="outlined"
            >
              <p>Veja Imovéis</p>
            </Button>
          </ButtonHome1>
          <ButtonHome2>
            <Button
              onClick={() => history.push("/perfil")}
              startIcon={<MdMapsHomeWork />}
              variant="outlined"
            >
              <p>Anuncie Aqui</p>
            </Button>
          </ButtonHome2>
          <ContentHome>
            <li>
              <img src={adverts} alt="Anuncios" />
              <h4>Anuncios</h4>
              <p>Consulte nossos planos e anuncie conosco</p>
            </li>
            <li>
              <img src={letter} alt="Anuncios" />
              <h4>Aluguéis</h4>
              <p>Alugue um imóvel ou coloque seus bens a render</p>
            </li>
            <li>
              <img src={coin} alt="Anuncios" />
              <h4>Compras</h4>
              <p>
                Para comprar ou vender um imóvel, certamente veio ao lugar
                certo.
              </p>
            </li>
            <li>
              <img src={ImageChat} alt="Anuncios" />
              <h4>Consultas</h4>
              <p>
                Com a ajuda de nossos acessores sua venda será mais fácil e
                rápida.
              </p>
            </li>
          </ContentHome>
        </ContainerHome>
        <Unstyled>
          <img src={styleComponentRigth} alt="styledbar" />
        </Unstyled>
        <ImgCity>
          <img src={ImageCityHome} alt="cityImage" />
        </ImgCity>
        <Infos>
          <h2>Sobre nós</h2>
          <p>
            Somos uma empresa 100% online com foco em ajudar você a realizar a
            compra, venda, análise ou até reforma do seu imóvel. Com ajuda dos
            nossos funcionários e conrretores certificados seu anúncio entrará
            em nossas páginas de forma profissional e atraente.
          </p>
        </Infos>
        {screenWidth < 1150 && (
          <Unstyled2>
            <img src={styleComponentLefth} alt="styledComponent" />
          </Unstyled2>
        )}
        <PropertyList>
          <h3>Aqui estão alguns de nossos anúncios</h3>
          {properties.length > 0 ? (
            properties?.map(
              (item, index) =>
                index < 2 && (
                  <li key={index}>
                    <PropertyCard properties={item} type="HomePage" />
                  </li>
                )
            )
          ) : (
            <LoadingScreen type="partial" message="" />
          )}
          {properties.length > 0 && (
            <Button onClick={() => history.push("/imoveis")}>
              Veja mais anuncios
            </Button>
          )}
        </PropertyList>
        {screenWidth >= 1150 && (
          <Unstyled2>
            <img src={styleComponentLefth} alt="styledComponent" />
          </Unstyled2>
        )}
        <Footer />
      </HomepageStyled>
    </>
  );
}

export default Homepage;
