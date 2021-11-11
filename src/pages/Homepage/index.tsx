import { PayCard } from "../../components/PayCard";
import { HomepageStyled } from "./styles";

function Homepage() {
  return (
    <>
      <HomepageStyled>
        Homepage
        <PayCard
          img="img"
          planName="Plano básico."
          anouncesQuantity="Apenas 1 imóvel"
          price={39.3}
        />
      </HomepageStyled>
      ;
    </>
  );
}

export default Homepage;
