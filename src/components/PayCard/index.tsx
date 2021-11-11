import { RowBox, PayCardStyled } from "./styles";
import logo from "../../assets/Images/dihome2.png";

interface PayCardProps {
  img: any;
  planName: string;
  anouncesQuantity: string;
  price: number;
}

export const PayCard = ({
  img,
  planName,
  anouncesQuantity,
  price,
}: PayCardProps) => {
  return (
    <PayCardStyled>
      <RowBox>
        <img src={logo} alt="" />
        <ul>
          <li>{planName}</li>
          <li>{anouncesQuantity}</li>
          <li>R$ {price} / mês</li>
        </ul>
      </RowBox>
      <button>assinar</button>
    </PayCardStyled>
  );
};
