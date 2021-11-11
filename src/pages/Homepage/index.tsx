import PropertyCard from "../../components/PropertyCard";
import { useProperties } from "../../providers/Properties";
import { HomepageStyled } from "./styles";

function Homepage() {
  const { properties } = useProperties();
  return (
    <HomepageStyled>
      {properties.map((item) => (
        <PropertyCard properties={item} />
      ))}
    </HomepageStyled>
  );
}

export default Homepage;
