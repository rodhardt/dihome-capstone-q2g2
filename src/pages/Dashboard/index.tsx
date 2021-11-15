import { useState, useEffect } from "react";

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

  useEffect(() => {
    setFilteredProperties(properties);
  }, [properties]);

  const [isChoosingFilters, setIsChoosingFilters] = useState(false);

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
    city: "includes-string",
    district: "includes-string",
    dorms: "includes",
    parking: "includes",
    bathrooms: "includes",
    houseArea: "range",
    landArea: "range",
  };

  const handleFilteredProperties = () => {
    const activeKeys = Object.keys(activeFilters);

    const activeValues = Object.values(activeFilters);
    const typeValues = Object.values(filterTypes);

    const newPropertiesList = properties.filter((property) => {
      return activeKeys.every((filterName, index) => {
        const propertyKeys = Object.keys(property);
        const propertyValues = Object.values(property);
        if (
          (typeof activeValues[index] === "number" &&
            activeValues[index] === 0) ||
          activeValues[index].length === 0
        ) {
          return true;
        }
        if (
          typeValues[index] === "max" &&
          propertyValues[propertyKeys.indexOf(filterName)] > activeValues[index]
        ) {
          return false;
        }
        if (
          typeValues[index] === "includes-string" &&
          !propertyValues[propertyKeys.indexOf(filterName)].includes(
            activeValues[index]
          )
        ) {
          return false;
        }
        if (
          typeValues[index] === "includes" &&
          !activeValues[index].includes(
            propertyValues[propertyKeys.indexOf(filterName)]
          ) &&
          !(
            activeValues[index].includes(5) &&
            propertyValues[propertyKeys.indexOf(filterName)] >= 5
          )
        ) {
          return false;
        }

        if (
          typeValues[index] === "equal" &&
          activeValues[index] !==
            propertyValues[propertyKeys.indexOf(filterName)]
        ) {
          return false;
        }
        if (
          typeValues[index] === "range" &&
          (propertyValues[propertyKeys.indexOf(filterName)] <
            activeValues[index][0] ||
            propertyValues[propertyKeys.indexOf(filterName)] >
              activeValues[index][1]) &&
          activeValues[index][1] !== 0
        ) {
          return false;
        }
        return true;
      });
    });
    setFilteredProperties(newPropertiesList);
  };

  const handleFilter = (filterSearchData: FilterSearchData) => {
    setActiveFilters(filterSearchData);
  };

  const closeWindow = () => {
    setIsChoosingFilters(false);
    handleFilteredProperties();
  };

  useEffect(() => {
    handleFilteredProperties();
  }, [activeFilters]);

  return (
    <>
      {isChoosingFilters && (
        <FilterModal handleFilter={handleFilter} closeWindow={closeWindow} />
      )}
      <button onClick={() => handleFilteredProperties()}>Teste</button>
      <button onClick={() => setIsChoosingFilters(true)}>Abrir Filtros</button>
      <DashboardStyled>
        {properties &&
          filteredProperties.map((item) => (
            <PropertyCard properties={item} type="DashBoard" />
          ))}
      </DashboardStyled>
    </>
  );
}

export default Dashboard;
