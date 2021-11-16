import PropertyCard from "../../components/PropertyCard";
import { useProperties } from "../../providers/Properties";
import { HomepageStyled } from "./styles";

import { useHistory } from "react-router-dom";

function Homepage() {
  const { properties } = useProperties();

  const history = useHistory();

  return (
    <HomepageStyled>
      <button
        onClick={() => {
          history.push("/perfil");
        }}
      >
        Perfil
      </button>
      <ul>
        {properties.map((item, index) =>
          index > 2 ? (
            <li key={index}>
              <PropertyCard properties={item} type="HomePage" />
            </li>
          ) : null
        )}
      </ul>
    </HomepageStyled>
  );
}

export default Homepage;
