import PropertyCard from "../../components/PropertyCard";
import { useProperties } from "../../providers/Properties";
import { DashboardStyled } from "./styles";
function Dashboard() {
  const { properties } = useProperties();
  return (
    <DashboardStyled>
      {properties.map((item) => (
        <PropertyCard properties={item} type="DashBoard" />
      ))}
    </DashboardStyled>
  );
}

export default Dashboard;
