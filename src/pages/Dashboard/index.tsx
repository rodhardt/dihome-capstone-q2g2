import { useState } from "react";

import PropertyCard from "../../components/PropertyCard";
import { useProperties } from "../../providers/Properties";
import { DashboardStyled } from "./styles";

import FilterModal from "../../components/Dashboard/FilterModal";

import { PropertyData } from "../../assets/Types/property";

interface FilterSearchData {
  price: number;
  type: string[];
  goal: string[];
  state: string;
  city: string;
  district: string;
  dorms: number[];
  parking: number[];
  bathrooms: number[];
  houseArea: number[];
  landArea: number[];
}

function Dashboard() {
  const { properties } = useProperties();

  const [filteredProperties, setFilteredProperties] =
    useState<PropertyData[]>(properties);

  const [activeFilters, setActiveFilters] = useState<FilterSearchData>({
    price: 0,
    type: [],
    goal: [],
    state: "",
    city: "",
    district: "",
    dorms: [],
    parking: [],
    bathrooms: [],
    houseArea: [],
    landArea: [],
  });

  const filterTypes = {
    price: "max",
    type: "includes",
    goal: "includes",
    state: "equal",
    city: "includes",
    district: "includes",
    dorms: "includes",
    parking: "includes",
    bathrooms: "includes",
    houseArea: "range",
    landArea: "range",
  };

  const handleFilteredProperties = () => {
    const activeKeys = Object.keys(activeFilters);
    const typeKeys = Object.keys(filterTypes);
    const activeValues = Object.values(activeFilters);
    const typeValues = Object.values(filterTypes);
  };

  const handleFilter = (filterSearchData: FilterSearchData) => {
    setActiveFilters(filterSearchData);
  };

  const closeWindow = () => {
    console.log("fechou");
  };

  return (
    <>
      {/* <FilterModal handleFilter={handleFilter} closeWindow={closeWindow} /> */}
      <button onClick={() => handleFilteredProperties()}>Teste</button>
      <DashboardStyled>
        {properties &&
          properties.map((item) => (
            <PropertyCard properties={item} type="DashBoard" />
          ))}
      </DashboardStyled>
    </>
  );
}

export default Dashboard;
