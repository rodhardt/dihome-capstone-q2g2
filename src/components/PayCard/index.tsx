import { RowBox, PayCardStyled } from "./styles";

interface PayCardProps {
  img: any;
  planName: string;
  anouncesQuantity: string;
  price: number;
  handlePlan: (planName: string) => void;
}

export const PayCard = ({
  img,
  planName,
  anouncesQuantity,
  price,
  handlePlan,
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
      <button onClick={() => handlePlan(planName)}>assinar</button>
    </PayCardStyled>
  );
};
