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
import { AiOutlineFilter } from "react-icons/ai";
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

  const [conter, setConter] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (conter <= listFun.length - 2) setConter(conter + 1);
      else setConter(0);
    }, 15000);
  }, [conter]);
  const listFun = [
    {
      img: CasaAsombrada,
      description:
        "Bela casa para alugar em amityville aluguel acessível por apenas R$: 1.000 trincas e cadeados ja incluidos alem de ajuda na mudança",
      lastResidentComent: "o preço é de matar",
    },
    {
      img: casaIt,
      description:
        "Casa antiga a venda em Derry, Maine preço  R$:100.000 caso tenha crianças damos um desconto especial de 66.6% ",
      lastResidentComent:
        "A vizinhança é tão acolhedoura que voce nem tem que se preocupar com o futuro dos seus filhos",
    },
    {
      img: gondor,
      description:
        "Belo castelo medieval a venda por R$: 1.000.000.000 exercito não incluido",
      lastResidentComent: "O castelo é otimo mas o  vizinho é insuportavel",
    },
    {
      img: hobbt,
      description:
        "Chale a preço amigavel nas montanhas R$: 80.000 com possiveis artefatos antigos",
      lastResidentComent:
        "Tirando ladrões de talheres os vizinhos são otimos......meu precioso....",
    },
    {
      img: mansãoSpenser,
      description:
        "Antiga mansão ao stilo vitoriano a venda com um porão muito grande R$: 1.000.000 caso tenha a cura para o T-virus a um desconto de 30%",
      lastResidentComent:
        "Os vizinhos parecem meio mortos mas se tiver muita munição é bem calmo....",
    },
    {
      img: evocandoEspiritos,
      description:
        "Casa de 2 andares com fazenda proxima para alugar R$: 1.300 o mes ",
      lastResidentComent:
        "A um cheiro estranho vindo das paredes pode precisar de detetizador",
    },
    {
      img: oExorcista,
      description:
        "Casa com 2 andares e porão espaçoso para compra  R$: 226.660(negocialvel)",
      lastResidentComent:
        "Otima casa o melhor é que da ate para usar sua propria alma(ou de familiare) como entrada",
    },
    {
      img: alcatraz,
      description:
        "Ilha paradiziaca com complexo habtacional semi-novo incluido",
      lastResidentComent: "Uma vez dentro nunca mais vai querer( e poder) sair",
    },
  ];

  const [renderAtt, setRenderAtt] = useState(1);
  return (
    <>
      <DashboardStyled>
        <div className="slider">
          <button
            className="changeSlider"
            onClick={() => {
              if (conter > 0) setConter(conter - 1);
            }}
          >
            <MdOutlineNavigateBefore />
          </button>

          <section className="boxSlider">
            <img src={listFun[conter].img} alt="imagem casa" />
            <p className="description">
              {"Descrição: " + listFun[conter].description + "."}
            </p>
            <p className="lastResidentComent">
              {"Comentario do ultimo inquilino: " +
                listFun[conter].lastResidentComent +
                "."}
            </p>
          </section>

          <button
            className="changeSlider"
            onClick={() => {
              if (conter <= listFun.length - 2) setConter(conter + 1);
              else setConter(0);
            }}
          >
            <MdOutlineNavigateNext />
          </button>
        </div>
        {isChoosingFilters && (
          <FilterModal handleFilter={handleFilter} closeWindow={closeWindow} />
        )}
        {/* <button onClick={() => handleFilteredProperties()}>Teste</button> */}
        <button className="filter" onClick={() => setIsChoosingFilters(true)}>
          <AiOutlineFilter /> Abrir Filtros
        </button>

        {renderAtt &&
          filteredProperties.map((item) => (
            <PropertyCard
              properties={item}
              type="DashBoard"
              setRenderAtt={setRenderAtt}
              renderAtt={renderAtt}
            />
          ))}
      </DashboardStyled>
    </>
  );
}

export default Dashboard;
