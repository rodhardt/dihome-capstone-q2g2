import { PayCard } from "../../components/PayCard";
import { HomepageStyled } from "./styles";

function Homepage() {
  return (
    <>
      <HomepageStyled>
        Homepage
        <PayCard
          img="https://s01.jetimgs.com/trvAWQHuYcArjvEQrh93oEZSAxK0Jz8p2OIdynM1xiqde5wAy6ZXoYGmXXuKeq0D608YD4xIADjHZMyTvhQ4bsnjjkNUXE3veAI0piwVWZd2PoswD6DUDB3Fkb0/PSX_20190604_170651.jpg"
          planName="Plano básico."
          anouncesQuantity="Apenas 1 imóvel"
          price={39.9}
        />
      </HomepageStyled>
      ;
    </>
  );
}

export default Homepage;
