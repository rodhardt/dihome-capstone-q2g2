import { useState, useEffect } from "react";
import CasaAsombrada from "../../assets/Images/CasaAssombrada.jpeg";
import casaIt from "../../assets/Images/casaIt.jpeg";
import gondor from "../../assets/Images/gondor.jpeg";
import hobbt from "../../assets/Images/hobbt.jpg";
import mansãoSpenser from "../../assets/Images/mansãoSpenser.jpeg";
import evocandoEspiritos from "../../assets/Images/evocandoEspiritos.jpeg";
import oExorcista from "../../assets/Images/oExorcista.jpeg";
import alcatraz from "../../assets/Images/alcatraz.jpeg";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { HiOutlineExclamation } from "react-icons/hi";
import { AiOutlineFilter } from "react-icons/ai";
import PropertyCard from "../../components/PropertyCard";
import { useProperties } from "../../providers/Properties";
import { DashboardStyled } from "./styles";

import FilterModal from "../../components/Dashboard/FilterModal";

import { PropertyData } from "../../assets/Types/property";

import Header from "../../components/Header";

import LoadingScreen from "../../components/LoadingScreen";

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

  const [counter, setCounter] = useState(0);

  const listFun = [
    {
      img: CasaAsombrada,
      description:
        "Bela casa acessível para alugar em amityville por apenas R$: 1.000 trincas e cadeados já inclusos além de ajuda na mudança",
      lastResidentComent: "o preço é de matar",
    },
    {
      img: casaIt,
      description:
        "Casa antiga a venda em Derry, Maine preço R$ 100.000, caso tenha crianças damos um desconto especial de 66.6% ",
      lastResidentComent:
        "A vizinhança é tão acolhedoura que você nem tem que se preocupar com o futuro dos seus filhos",
    },
    {
      img: gondor,
      description:
        "Belo castelo medieval a venda por R$ 1.000.000.000 exército não incluso",
      lastResidentComent: "O castelo é otimo, mas o vizinho é insuportável",
    },
    {
      img: hobbt,
      description:
        "Chalé a preço amigável nas montanhas R$ 80.000 com possíveis artefatos antigos",
      lastResidentComent:
        "Tirando ladrões de talheres os vizinhos são ótimos......meu precioso....",
    },
    {
      img: mansãoSpenser,
      description:
        "Antiga mansão ao estilo vitoriano a venda com um porão muito grande R$ 1.000.000 caso tenha a cura para o T-virus há um desconto de 30%",
      lastResidentComent:
        "Os vizinhos parecem meio mortos, mas se tiver muita munição é bem calmo....",
    },
    {
      img: evocandoEspiritos,
      description:
        "Casa de 2 andares com fazenda próxima para alugar R$ 1.300 / mês",
      lastResidentComent:
        "Há um cheiro estranho vindo das paredes, pode precisar de detetizador",
    },
    {
      img: oExorcista,
      description:
        "Casa com 2 andares e porão espaçoso para compra R$ 226.660 (negociável)",
      lastResidentComent:
        "Ótima casa o melhor é que dá até para usar sua própria alma(ou de familiare) como entrada",
    },
    {
      img: alcatraz,
      description:
        "Ilha paradisíaca com complexo habitacional semi-novo incluso",
      lastResidentComent: "Uma vez dentro nunca mais vai querer(e poder) sair",
    },
  ];

  const slide = () => {
    if (counter === listFun.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) =>
        counter + 1 === listFun.length ? 0 : counter + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [renderAtt, setRenderAtt] = useState(1);
  return (
    <>
      <Header />
      <DashboardStyled>
        <div className="slider">
          <button
            className="changeSlider"
            onClick={() => {
              counter > 0
                ? setCounter(counter - 1)
                : setCounter(listFun.length - 2);
            }}
          >
            <MdOutlineNavigateBefore />
          </button>

          <section className="boxSlider">
            <p className="slider-text description">
              {"Descrição: " + listFun[counter].description + "."}
            </p>
            <div className="image-container">
              <img src={listFun[counter].img} alt="imagem casa" />
            </div>

            <p className="slider-text comment">
              {"Comentario do ultimo inquilino: " +
                listFun[counter].lastResidentComent +
                "."}
            </p>
          </section>

          <button
            className="changeSlider"
            onClick={() => {
              if (counter <= listFun.length - 2) setCounter(counter + 1);
              else setCounter(0);
            }}
          >
            <MdOutlineNavigateNext />
          </button>
        </div>
        {isChoosingFilters && (
          <FilterModal handleFilter={handleFilter} closeWindow={closeWindow} />
        )}

        <button className="filter" onClick={() => setIsChoosingFilters(true)}>
          <AiOutlineFilter /> Abrir Filtros
        </button>

        {properties.length === 0 && (
          <div className="loading-dashboard">
            <LoadingScreen type="partial" message="Buscando imóveis" />
          </div>
        )}
        {renderAtt && (
          <ul>
            {filteredProperties
              .filter((property) => property.consultantStatus === "aprovado")
              .map((item, index) => (
                <li key={index}>
                  <PropertyCard
                    properties={item}
                    type="DashBoard"
                    setRenderAtt={setRenderAtt}
                    renderAtt={renderAtt}
                  />
                </li>
              ))}
          </ul>
        )}
        {properties.length > 0 && filteredProperties.length === 0 && (
          <div className="search-failed">
            <p>Nenhum imóvel atende sua busca</p>
            <HiOutlineExclamation />
          </div>
        )}
      </DashboardStyled>
    </>
  );
}

export default Dashboard;
