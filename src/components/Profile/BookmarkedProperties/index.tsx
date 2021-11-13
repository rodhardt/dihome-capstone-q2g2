import { useHistory } from "react-router-dom";

import { BookmarkedPropertiesStyled } from "./styles";

import { BsBookmark } from "react-icons/bs";
import { MdOutlineHomeWork } from "react-icons/md";

import { useAuth } from "../../../providers/Authentication";
import PropertyCard from "../../PropertyCard";

function BookmarkedProperties() {
  const history = useHistory();

  const { userInfo } = useAuth();

  return (
    <BookmarkedPropertiesStyled>
      {userInfo.bookmarkedProperties?.length > 0 ? (
        <ul>
          {userInfo.bookmarkedProperties?.map((property, index) => (
            <li key={index}>
              <PropertyCard properties={property} type="DashBoard" />
            </li>
          ))}
        </ul>
      ) : (
        <div className="null-bookmarked">
          <p>Você ainda não tem imóveis salvos.</p>
          <BsBookmark />
          <button onClick={() => history.push("imoveis")}>
            <MdOutlineHomeWork />
            Veja Imóveis
          </button>
        </div>
      )}
    </BookmarkedPropertiesStyled>
  );
}

export default BookmarkedProperties;
