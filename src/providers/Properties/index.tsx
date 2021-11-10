import { createContext, useContext, useState, ReactNode } from "react";
import api from "../../services/api";
import { PropertyData } from "../../assets/Types/property";
import { useAuth } from "../Authentication";

interface PropertiesProviderProps {
  children: ReactNode;
}

interface PropertiesProviderData {
  properties: PropertyData[];
  getProperties: () => void;
  addProperty: (newProperty: PropertyData) => void;
  updateProperty: (newProperty: PropertyData) => void;
}

const PropertiesContext = createContext<PropertiesProviderData>(
  {} as PropertiesProviderData
);

export const PropertiesProvider = ({ children }: PropertiesProviderProps) => {
  const [properties, setProperties] = useState<PropertyData[]>([]);

  const { authToken } = useAuth();

  const getProperties = () => {
    api
      .get("/property")
      .then((response) => setProperties(response.data))
      .catch((err) => console.log(err));
  };

  const addProperty = (newProperty: PropertyData) => {
    const newPropertyId = { ...newProperty, id: properties.length + 1 };
    setProperties([...properties, newPropertyId]);
    api.post("/property", newProperty).catch((err) => console.log(err));
  };

  const updateProperty = (propertyNewData: PropertyData) => {
    setProperties(
      properties.map((property) =>
        property.id === propertyNewData.id ? propertyNewData : property
      )
    );
    api
      .patch(`property/${propertyNewData.id}`, propertyNewData, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .catch((err) => console.log(err));
  };

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        getProperties,
        addProperty,
        updateProperty,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export const useProperties = () => useContext(PropertiesContext);
