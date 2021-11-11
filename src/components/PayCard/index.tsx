import { RowBox, PayCardStyled } from "./styles";

interface PayCardProps {
  img: string;
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
        <div>{img}</div>
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
