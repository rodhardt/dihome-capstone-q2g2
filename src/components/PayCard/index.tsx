import { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../providers/Authentication";
import ConfirmedModal from "../ConfirmedModal";
import { RowBox, PayCardStyled } from "./styles";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const history = useHistory();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenSecondModal, setIsOpenSecondModal] = useState(false);

  const { updateUser, userInfo } = useAuth();

  const newUserInfo = {
    id: userInfo.id,
    password: userInfo.password,
    name: userInfo.name,
    email: userInfo.email,
    telephone: userInfo.telephone,
    consultant: userInfo.consultant,
    announcedProperties: userInfo.announcedProperties,
    bookmarkedProperties: userInfo.bookmarkedProperties,
    subscriptionType: planName,
    markedDates: userInfo.markedDates,
  };

  const modalInformation = {
    title: "Assinar plano",
    closeFunction: () => setIsOpenModal(false),
    message: `Você deseja assinar esse plano por R$ ${price}0?`,
    confirmButton: {
      confirmText: "confirmar",
      confirmFunction: () => {
        updateUser(newUserInfo);
        setIsOpenSecondModal(true);
      },
    },
    cancelButton: {
      cancelText: "cancelar",
      cancelFunction: () => {},
    },
  };

  const signed = () =>
    toast.success("Agora você pode anunciar!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const secondModalInformation = {
    title: "Parabéns",
    closeFunction: () => setIsOpenModal(false),
    message: `O plano ${planName} foi assinado com sucesso!`,
    confirmButton: {
      confirmText: "voltar",
      confirmFunction: () => {
        history.push("/perfil");
        setIsOpenSecondModal(false);
        signed();
      },
    },
  };

  return (
    <>
      <PayCardStyled>
        {isOpenModal && <ConfirmedModal modalContent={modalInformation} />}
        {isOpenSecondModal && (
          <ConfirmedModal modalContent={secondModalInformation} />
        )}
        <RowBox onClick={() => setIsOpenModal(true)}>
          <img src={img} alt="" />
          <ul>
            <li>{planName}</li>
            <li>{anouncesQuantity}</li>
            <li>R$ {price} / mês</li>
          </ul>
        </RowBox>
        <button
          onClick={() => {
            setIsOpenModal(true);
          }}
        >
          assinar
        </button>
      </PayCardStyled>
    </>
  );
};
