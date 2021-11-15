import PropertyCard from "../../components/PropertyCard";
import { useProperties } from "../../providers/Properties";
import { DashboardStyled } from "./styles";
import { useEffect, useState } from "react";
function Dashboard() {
  const [filterType, setFilTertype] = useState("");

  const [filterBathroom, setFilterBathroom] = useState(0);

  const [filterDorms, setFilterDorms] = useState(0);

  const [filterPrice, setFilterPrice] = useState(0);

  const [list, setList]: any = useState([]);

  const [searchInit, setSearchInit] = useState(false);

  const { properties } = useProperties();
  useEffect(() => {
    setList(properties);
  }, [properties]);

  return (
    <DashboardStyled>
      <button
        onClick={() => {
          setSearchInit(!searchInit);
        }}
      >
        search
      </button>
      {searchInit === true ? (
        <div>
          <select
            onChange={(evt) => {
              setFilTertype(evt.target.value);
            }}
          >
            <option value=""></option>
            <option value="Apartamento">Apartamento</option>
            <option value="Casa">Casa</option>
          </select>
          <br />
          <input
            name="bathroom"
            placeholder="numero de banheiros"
            type="number"
            min="0"
            onChange={(evt) => {
              setFilterBathroom(parseFloat(evt.target.value));
            }}
          />
          <br />
          <input
            name="Dorm"
            placeholder="numero de quartos"
            type="number"
            min="0"
            onChange={(evt) => {
              setFilterDorms(parseFloat(evt.target.value));
            }}
          />
          <br />
          <input
            name="Pryce"
            placeholder="Preço minimo"
            type="number"
            min="1000"
            onChange={(evt) => {
              setFilterPrice(parseFloat(evt.target.value));
            }}
          />
          <br />
          <button
            className="ativatedSearch"
            onClick={() => {
              let typeAvaliate = properties.filter((element: any) => {
                return (
                  (element && element.type === filterType) || filterType === ""
                );
              });
              let bathroomAvaliate = typeAvaliate.filter((element: any) => {
                return (
                  (element && element.bathrooms === filterBathroom) ||
                  filterBathroom === 0 ||
                  isNaN(filterBathroom)
                );
              });
              let dormAvaluate = bathroomAvaliate.filter((element: any) => {
                return (
                  (element && element.dorms === filterDorms) ||
                  filterDorms === 0 ||
                  isNaN(filterDorms)
                );
              });

              let priceAvaluate = dormAvaluate.filter((element: any) => {
                return (
                  element.price >= filterPrice ||
                  filterPrice === 0 ||
                  isNaN(filterPrice)
                );
              });
              setList(priceAvaluate);
            }}
          >
            Pesquisar
          </button>
        </div>
      ) : (
        <div></div>
      )}
      <br />
      {list?.map((item: any) => (
        <PropertyCard properties={item} type="DashBoard" />
      ))}
    </DashboardStyled>
  );
}

export default Dashboard;
