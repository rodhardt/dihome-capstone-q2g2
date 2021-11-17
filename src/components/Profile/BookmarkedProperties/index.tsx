import { useHistory } from "react-router-dom";
import { useState } from "react";

import { BookmarkedPropertiesStyled } from "./styles";

import { BsBookmark } from "react-icons/bs";
import { MdOutlineHomeWork } from "react-icons/md";

import { useAuth } from "../../../providers/Authentication";
import { useProperties } from "../../../providers/Properties";
import PropertyCard from "../../PropertyCard";

function BookmarkedProperties() {
  const history = useHistory();

  const { userInfo } = useAuth();
  const { properties } = useProperties();

  const [renderAtt, setRenderAtt] = useState(0);

  return (
    <BookmarkedPropertiesStyled>
      {userInfo.bookmarkedProperties?.length > 0 ? (
        <>
          <h3>Imóveis Salvos</h3>
          <ul>
            {properties.map((property, index) => (
              <>
                {userInfo.bookmarkedProperties?.includes(property.id || 0) ? (
                  <li key={index}>
                    <PropertyCard
                      properties={property}
                      type="DashBoard"
                      setRenderAtt={setRenderAtt}
                      renderAtt={renderAtt}
                    />
                  </li>
                ) : null}
              </>
            ))}
          </ul>
        </>
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
