import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import api from "../../services/api";
import { PropertyData } from "../../assets/Types/property";
import { useAuth } from "../Authentication";

interface PropertiesProviderProps {
  children: ReactNode;
}

interface PropertiesProviderData {
  properties: PropertyData[];

  addProperty: (newProperty: PropertyData) => void;
  updateProperty: (newProperty: PropertyData) => void;
}

const PropertiesContext = createContext<PropertiesProviderData>(
  {} as PropertiesProviderData
);

export const PropertiesProvider = ({ children }: PropertiesProviderProps) => {
  const [properties, setProperties] = useState<PropertyData[]>([]);

  const { authToken } = useAuth();
  useEffect(() => {
    api
      .get("/property")
      .then((response) => setProperties(response.data))
      .catch((err) => console.log(err));
  }, []);

  const addProperty = (newProperty: PropertyData) => {
    const newPropertyId = { ...newProperty, id: properties.length + 1 };
    setProperties([...properties, newPropertyId]);
    api.post("/properties", newProperty).catch((err) => console.log(err));
  };

  const updateProperty = (propertyNewData: PropertyData) => {
    setProperties(
      properties.map((property) =>
        property.id === propertyNewData.id ? propertyNewData : property
      )
    );
    api
      .patch(`properties/${propertyNewData.id}`, propertyNewData, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .catch((err) => console.log(err));
  };

  return (
    <PropertiesContext.Provider
      value={{
        properties,

        addProperty,
        updateProperty,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export const useProperties = () => useContext(PropertiesContext);
