import { FilterModalStyled } from "./styles";

import { useState, useEffect } from "react";

import { useProperties } from "../../../providers/Properties";

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

interface FilterModalProps {
  handleFilter: (filterFormData: FilterSearchData) => void;
  closeWindow: () => void;
}

function FilterModal({ handleFilter, closeWindow }: FilterModalProps) {
  const { properties } = useProperties();

  const [priceChosen, setPriceChosen] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [typesChosen, setTypesChosen] = useState<string[]>([]);
  const [goalsChosen, setGoalsChosen] = useState<string[]>([]);
  const [stateChosen, setStateChosen] = useState("");
  const [cityChosen, setCityChosen] = useState("");
  const [districtChosen, setDistrictChosen] = useState("");
  const [dormsChosen, setDormsChosen] = useState<number[]>([]);
  const [parkingsChosen, setParkingsChosen] = useState<number[]>([]);
  const [bathroomsChosen, setBathroomsChosen] = useState<number[]>([]);
  const [houseAreaChosen, setHouseAreaChosen] = useState<number[]>([0, 0]);
  const [landAreaChosen, setLandAreaChosen] = useState<number[]>([0, 0]);

  const [maxHouseArea, setMaxHouseArea] = useState(0);
  const [maxLandArea, setMaxLandArea] = useState(0);

  useEffect(() => {
    const maxPriceValue = properties.reduce(
      (acm, cv) => (cv.price > acm ? cv.price : acm),
      0
    );
    const maxHouseAreaValue = properties.reduce(
      (acm, cv) => (cv.houseArea > acm ? cv.houseArea : acm),
      0
    );
    const maxLandAreaValue = properties.reduce(
      (acm, cv) => (cv.landArea > acm ? cv.landArea : acm),
      0
    );
    setMaxPrice(maxPriceValue);
    setPriceChosen(maxPriceValue);
    setMaxHouseArea(maxHouseAreaValue);
    setHouseAreaChosen([0, maxHouseAreaValue]);
    setMaxLandArea(maxLandAreaValue);
    setLandAreaChosen([0, maxLandAreaValue]);
  }, [properties]);

  const handleTypes = (typeInput: string) => {
    if (typesChosen.includes(typeInput)) {
      setTypesChosen([...typesChosen.filter((type) => type !== typeInput)]);
    } else {
      setTypesChosen([...typesChosen, typeInput]);
    }
  };
  const handleGoals = (goalInput: string) => {
    if (goalsChosen.includes(goalInput)) {
      setGoalsChosen([...goalsChosen.filter((goal) => goal !== goalInput)]);
    } else {
      setGoalsChosen([...goalsChosen, goalInput]);
    }
  };

  const handleDorms = (dormInput: string) => {
    if (dormsChosen.includes(Number(dormInput))) {
      setDormsChosen([
        ...dormsChosen.filter((dorm) => dorm !== Number(dormInput)),
      ]);
    } else {
      setDormsChosen([...dormsChosen, Number(dormInput)]);
    }
  };

  const handleParkings = (parkingInput: string) => {
    if (parkingsChosen.includes(Number(parkingInput))) {
      setParkingsChosen([
        ...parkingsChosen.filter((parking) => parking !== Number(parkingInput)),
      ]);
    } else {
      setParkingsChosen([...parkingsChosen, Number(parkingInput)]);
    }
  };

  const handleBathrooms = (bathroomInput: string) => {
    if (bathroomsChosen.includes(Number(bathroomInput))) {
      setBathroomsChosen([
        ...bathroomsChosen.filter(
          (bathroom) => bathroom !== Number(bathroomInput)
        ),
      ]);
    } else {
      setBathroomsChosen([...bathroomsChosen, Number(bathroomInput)]);
    }
  };

  const handleHouseArea = (areaInput: string, isMax: boolean) => {
    if (isMax) {
      setHouseAreaChosen([houseAreaChosen[0], Number(areaInput)]);
    } else {
      setHouseAreaChosen([Number(areaInput), houseAreaChosen[1]]);
    }
  };

  const handleLandArea = (areaInput: string, isMax: boolean) => {
    if (isMax) {
      setLandAreaChosen([landAreaChosen[0], Number(areaInput)]);
    } else {
      setLandAreaChosen([Number(areaInput), landAreaChosen[1]]);
    }
  };

  const handleSubmit = () => {
    const filters = {
      price: priceChosen,
      type: typesChosen,
      goal: goalsChosen,
      state: stateChosen,
      city: cityChosen,
      district: districtChosen,
      dorms: dormsChosen,
      parking: parkingsChosen,
      bathrooms: bathroomsChosen,
      houseArea: houseAreaChosen,
      landArea: landAreaChosen,
    };
    console.log(filters);
  };

  const resetSearch = () => {
    const filters = {
      price: 0,
      type: [],
      goal: [],
      state: "",
      city: "",
      district: "",
      dorms: [],
      parking: [],
      bathrooms: [],
      houseArea: [0, 0],
      landArea: [0, 0],
    };
    console.log(filters);
  };

  return (
    <FilterModalStyled>
      <div className="modal-card">
        <header>
          <h4>Filtrar Imóveis</h4>

          <button
            className="close-button"
            onClick={() => console.log("fechou")}
          >
            X
          </button>
        </header>
        <div className="buttons-container">
          <button className="confirm-button" onClick={() => handleSubmit()}>
            Filtrar
          </button>
          <button
            className="cancel-button"
            onClick={() => {
              resetSearch();
              closeWindow();
            }}
          >
            Limpar
          </button>
        </div>
        <div className="form-container">
          <div className="input-container number price">
            <label htmlFor="price-max">Preço</label>
            <p>{priceChosen}</p>
            <input
              id="price-max"
              type="range"
              min="0"
              step="1000"
              max={maxPrice}
              value={priceChosen}
              placeholder="R$ ..."
              onChange={(evt) => setPriceChosen(Number(evt.target.value))}
            />
          </div>
          <div className="input-container checkbox">
            <label>Casa</label>
            <input
              type="checkbox"
              value="Casa"
              onChange={(evt) => handleTypes(evt.target.value)}
            />
            <label>Apartamento</label>
            <input
              type="checkbox"
              value="Apartamento"
              onChange={(evt) => handleTypes(evt.target.value)}
            />
          </div>
          <div className="input-container checkbox">
            <label>Alugar</label>
            <input
              type="checkbox"
              value="Alugar"
              onChange={(evt) => handleGoals(evt.target.value)}
            />
            <label>Venda</label>
            <input
              type="checkbox"
              value="Venda"
              onChange={(evt) => handleGoals(evt.target.value)}
            />
          </div>

          <div className="input-container select">
            <label>Estado</label>
            <select
              id="estados"
              value={stateChosen}
              onChange={(evt) => setStateChosen(evt.target.value)}
            >
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
              <option value="EX">Estrangeiro</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="input-name">Cidade</label>
            <input
              placeholder="digite uma cidade"
              value={cityChosen}
              onChange={(evt) => setCityChosen(evt.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="input-name">Bairro</label>
            <input
              placeholder="digite um bairro"
              value={districtChosen}
              onChange={(evt) => setDistrictChosen(evt.target.value)}
            />
          </div>
          <div className="input-container checkbox">
            <h4>Dormitórios</h4>
            <label>1</label>
            <input
              type="checkbox"
              value="1"
              onChange={(evt) => handleDorms(evt.target.value)}
            />
            <label>2</label>
            <input
              type="checkbox"
              value="2"
              onChange={(evt) => handleDorms(evt.target.value)}
            />
            <label>3</label>
            <input
              type="checkbox"
              value="3"
              onChange={(evt) => handleDorms(evt.target.value)}
            />
            <label>4</label>
            <input
              type="checkbox"
              value="4"
              onChange={(evt) => handleDorms(evt.target.value)}
            />
            <label>5 ou +</label>
            <input
              type="checkbox"
              value="5"
              onChange={(evt) => handleDorms(evt.target.value)}
            />
          </div>
          <div className="input-container checkbox">
            <h4>Vagas Estacionamento</h4>
            <label>1</label>
            <input
              type="checkbox"
              value="1"
              onChange={(evt) => handleParkings(evt.target.value)}
            />
            <label>2</label>
            <input
              type="checkbox"
              value="2"
              onChange={(evt) => handleParkings(evt.target.value)}
            />
            <label>3</label>
            <input
              type="checkbox"
              value="3"
              onChange={(evt) => handleParkings(evt.target.value)}
            />
            <label>4</label>
            <input
              type="checkbox"
              value="4"
              onChange={(evt) => handleParkings(evt.target.value)}
            />
            <label>5 ou +</label>
            <input
              type="checkbox"
              value="5"
              onChange={(evt) => handleParkings(evt.target.value)}
            />
          </div>
          <div className="input-container checkbox">
            <h4>Banheiros</h4>
            <label>1</label>
            <input
              type="checkbox"
              value="1"
              onChange={(evt) => handleBathrooms(evt.target.value)}
            />
            <label>2</label>
            <input
              type="checkbox"
              value="2"
              onChange={(evt) => handleBathrooms(evt.target.value)}
            />
            <label>3</label>
            <input
              type="checkbox"
              value="3"
              onChange={(evt) => handleBathrooms(evt.target.value)}
            />
            <label>4</label>
            <input
              type="checkbox"
              value="4"
              onChange={(evt) => handleBathrooms(evt.target.value)}
            />
            <label>5 ou +</label>
            <input
              type="checkbox"
              value="5"
              onChange={(evt) => handleBathrooms(evt.target.value)}
            />
          </div>
          <div className="input-container number">
            <h4>Área Construída</h4>
            <label>Valor mínimo</label>
            <input
              placeholder="...Metros²"
              min="0"
              max={`${maxHouseArea}`}
              step="10"
              value={`${houseAreaChosen[0]}`}
              onChange={(evt) => handleHouseArea(evt.target.value, false)}
            />
            <label>Valor máximo</label>
            <input
              placeholder="...Metros²"
              min="0"
              max={`${maxHouseArea}`}
              step="10"
              value={`${houseAreaChosen[1]}`}
              onChange={(evt) => handleHouseArea(evt.target.value, true)}
            />
          </div>
          <div className="input-container number">
            <h4>Área do Terreno</h4>
            <label>Valor mínimo</label>
            <input
              placeholder="...Metros²"
              min="0"
              max={`${maxLandArea}`}
              step="10"
              value={`${landAreaChosen[0]}`}
              onChange={(evt) => handleLandArea(evt.target.value, false)}
            />
            <label>Valor máximo</label>
            <input
              placeholder="...Metros²"
              min="0"
              max={`${maxLandArea}`}
              step="10"
              value={`${landAreaChosen[1]}`}
              onChange={(evt) => handleLandArea(evt.target.value, true)}
            />
          </div>
        </div>
      </div>
    </FilterModalStyled>
  );
}

export default FilterModal;
