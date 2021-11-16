import PropertyCard from "../../components/PropertyCard";
import { useProperties } from "../../providers/Properties";
import {
  ButtonHome1,
  ButtonHome2,
  ContainerHome,
  ContentHome,
  Header,
  HomepageStyled,
  Infos,
  Unstyled,
  Unstyled2,
  PropertyList,
  ImgCity,
} from "./styles";
import Button from "@material-ui/core/Button";
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
function Homepage() {
  const { properties } = useProperties();
  const { authToken } = useAuth();
  const history = useHistory();

  return (
    <HomepageStyled>
      <Header />
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
            onClick={() =>
              authToken.length > 0
                ? history.push("/imoveis")
                : history.push("/planos")
            }
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
              Para comprar ou vender um imóvel, certamente veio ao lugar certo.
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
          nossos funcionários e conrretores certificados seu anúncio entrará em
          nossas páginas de forma profissional e atraente.
        </p>
      </Infos>
      <Unstyled2>
        <img src={styleComponentLefth} alt="styledComponent" />
      </Unstyled2>
      <h3>Aqui estão alguns de nossos anúncios</h3>
      <PropertyList>
        {properties.map(
          (item, index) =>
            index < 2 && (
              <li>
                <PropertyCard properties={item} type="HomePage" />
              </li>
            )
        )}
        <Button
          onClick={() =>
            authToken.length > 0
              ? history.push("/imoveis")
              : history.push("/login")
          }
        >
          Veja mais anuncios
        </Button>
      </PropertyList>
      <Footer />
    </HomepageStyled>
  );
}

export default Homepage;
