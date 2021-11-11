import { PayCard } from "../../components/PayCard";
import { PayPageStyled } from "./styles";
import logoOne from "../../assets/Images/logoWithoutName.png";
import logoTwo from "../../assets/Images/logoTwo.png";
import logoThree from "../../assets/Images/logoThree.png";
import logoFour from "../../assets/Images/logoFour.png";

const PayPage = () => {
  return (
    <PayPageStyled>
      PayPage
      <PayCard
        img={logoOne}
        planName={"Plano básico"}
        anouncesQuantity={"Apenas 1 imóvel"}
        price={39.9}
      />
      <PayCard
        img={logoTwo}
        planName={"Plano em dobro"}
        anouncesQuantity={"Até 3 imóveis"}
        price={69.9}
      />
      <PayCard
        img={logoThree}
        planName={"Plano master"}
        anouncesQuantity={"Até 10 imóveis"}
        price={159.9}
      />
      <PayCard
        img={logoFour}
        planName={"Plano ilimitado"}
        anouncesQuantity={"Imóveis ilimitados"}
        price={339.9}
      />
    </PayPageStyled>
  );
};

export default PayPage;
