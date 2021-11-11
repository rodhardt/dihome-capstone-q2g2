import PropertyCard from "../../components/PropertyCard";
import { useProperties } from "../../providers/Properties";
import { HomepageStyled } from "./styles";

function Homepage() {
  const { properties } = useProperties();
  return (
    <HomepageStyled>
      {properties.map((item, index) =>
        index > 2 ? <PropertyCard properties={item} type="HomePage" /> : null
      )}
    </HomepageStyled>
  );
}

export default Homepage;
