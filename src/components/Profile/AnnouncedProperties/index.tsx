import { AnnouncedPropertiesStyled } from "./styles";

import { useAuth } from "../../../providers/Authentication";
import { GoMegaphone } from "react-icons/go";
import { ImDropbox } from "react-icons/im";

function AnnouncedProperties() {
  const { userInfo } = useAuth();

  return (
    <AnnouncedPropertiesStyled>
      {userInfo.announcedProperties?.length > 0 ? (
        <ul>
          {userInfo.announcedProperties?.map((property, index) => (
            <li key={index}>cards</li>
          ))}
        </ul>
      ) : (
        <div className="null-announced">
          <p>Você não anunciou nenhum imóvel.</p>
          <ImDropbox />
          <button>
            <GoMegaphone />
            Anuncie Já!
          </button>
        </div>
      )}
    </AnnouncedPropertiesStyled>
  );
}

export default AnnouncedProperties;
