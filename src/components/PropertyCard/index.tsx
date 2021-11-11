import {
  ContainerGlobal,
  ContainerPropertyCard,
  HeaderCard,
  HousePrice,
  InfosCard,
  InfosHouse,
} from "./styles";
import { MdOutlineBathroom } from "react-icons/md";
import { BiBed } from "react-icons/bi";
import { GiHomeGarage } from "react-icons/gi";
import { RiRuler2Line } from "react-icons/ri";
import ButtonLogo from "../../assets/Images/ButtonCard.png";

function PropertyCard({ properties }: any) {
  return (
    <ContainerGlobal>
      <ContainerPropertyCard>
        <HeaderCard>
          <p>{properties.goal}</p>
          <p>{properties.type}</p>
        </HeaderCard>
        <img src={properties.mainImage} alt={"House"} />
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
          <p>R${properties.price.toLocaleString()}</p>
        </HousePrice>
      </ContainerPropertyCard>
    </ContainerGlobal>
  );
}

export default PropertyCard;
