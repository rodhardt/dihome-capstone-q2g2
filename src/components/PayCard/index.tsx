import { RowBox, PayCardStyled } from "./styles";

interface PayCardProps {
  img: any;
  planName: string;
  anouncesQuantity: string;
  price: number;
  callback?: (param?: any) => void;
}

export const PayCard = ({
  img,
  planName,
  anouncesQuantity,
  price,
  callback,
}: PayCardProps) => {
  return (
    <PayCardStyled>
      <RowBox>
        <img src={img} alt="" />
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
