import { MdOutlineFileDownloadDone } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { ConsultantButtonsContainer } from "./styles";
import { PropertyData } from "../../../assets/Types/property";
import { useProperties } from "../../../providers/Properties";
import ConfirmedModal from "../../ConfirmedModal";
import { useState } from "react";

interface ConsultantButtonsProps {
  propertyToRender: PropertyData;
}

export const ConsultantButtons = ({
  propertyToRender,
}: ConsultantButtonsProps) => {
  const { updateProperty } = useProperties();
  const [isOpenDenyModalInformation, setIsOpenDenyModalInformation] =
    useState(false);
  const [isOpenApproveModalInformation, setIsOpenApproveModalInformation] =
    useState(false);

  const handleApprove = () => {
    setIsOpenApproveModalInformation(true);
  };

  const handleDeny = () => {
    setIsOpenDenyModalInformation(true);
  };

  const denyModalInformation = {
    title: "Publicação não aprovada.",
    closeFunction: () => setIsOpenDenyModalInformation(false),
    message: "Descreva o porquê da propriedade não poder ser aprovada.",
    textareaPlaceholder: "Digite aqui...",
    confirmButton: {
      confirmText: "enviar",
      confirmFunction: () => {},
    },
    cancelButton: {
      cancelText: "voltar",
      cancelFunction: () => {},
    },
  };

  const approveModalInformation = {
    title: "Aprovar publicação.",
    closeFunction: () => setIsOpenApproveModalInformation(false),
    message: "Você aprova a publicação desta propriedade?",
    confirmButton: {
      confirmText: "aprovar",
      confirmFunction: () => {
        const newPropertyData = {
          id: propertyToRender.id,
          announcerId: propertyToRender.announcerId,
          consultantStatus: "ativo",
          announcerStatus: propertyToRender.consultantStatus,
          viewsCount: propertyToRender.viewsCount,
          bookmarkCount: propertyToRender.bookmarkCount,
          title: propertyToRender.title,
          street: propertyToRender.street,
          state: propertyToRender.state,
          city: propertyToRender.city,
          district: propertyToRender.district,
          number: propertyToRender.number,
          type: propertyToRender.type,
          goal: propertyToRender.goal,
          dorms: propertyToRender.dorms,
          parking: propertyToRender.parking,
          bathrooms: propertyToRender.bathrooms,
          houseArea: propertyToRender.houseArea,
          landArea: propertyToRender.landArea,
          description: propertyToRender.description,
          mainImage: propertyToRender.mainImage,
          images: propertyToRender.images,
          price: propertyToRender.price,
        };
        updateProperty(newPropertyData);
      },
    },
    cancelButton: {
      cancelText: "voltar",
      cancelFunction: () => {},
    },
  };

  return (
    <ConsultantButtonsContainer>
      {isOpenDenyModalInformation && (
        <ConfirmedModal modalContent={denyModalInformation} />
      )}
      {isOpenApproveModalInformation && (
        <ConfirmedModal modalContent={approveModalInformation} />
      )}

      <button className="confirm" type="button" onClick={handleApprove}>
        <MdOutlineFileDownloadDone />
      </button>
      <button className="deny" type="button" onClick={handleDeny}>
        <ImCancelCircle />
      </button>
    </ConsultantButtonsContainer>
  );
};
