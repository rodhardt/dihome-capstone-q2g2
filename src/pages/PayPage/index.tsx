import { PayCard } from "../../components/PayCard";
import { PayPageStyled } from "./styles";
import logoOne from "../../assets/Images/logoWithoutName.png";
import logoTwo from "../../assets/Images/logoTwo.png";
import logoThree from "../../assets/Images/logoThree.png";
import logoFour from "../../assets/Images/logoFour.png";
import { useState } from "react";
import ConfirmedModal from "../../components/ConfirmedModal";

const PayPage = () => {
  const [plan, setPlan] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handlePlan = (planName: string) => setPlan(planName);

  return (
    <PayPageStyled>
      <PayCard
        img={logoOne}
        planName={"Plano básico"}
        anouncesQuantity={"Apenas 1 imóvel"}
        price={39.9}
        handlePlan={handlePlan}
      />
      <PayCard
        img={logoTwo}
        planName={"Plano triplo"}
        anouncesQuantity={"Até 3 imóveis"}
        price={69.9}
        handlePlan={handlePlan}
      />
      <PayCard
        img={logoThree}
        planName={"Plano master"}
        anouncesQuantity={"Até 10 imóveis"}
        price={159.9}
        handlePlan={handlePlan}
      />
      <PayCard
        img={logoFour}
        planName={"Plano ilimitado"}
        anouncesQuantity={"Imóveis ilimitados"}
        price={339.9}
        handlePlan={handlePlan}
      />
    </PayPageStyled>
  );
};

export default PayPage;
