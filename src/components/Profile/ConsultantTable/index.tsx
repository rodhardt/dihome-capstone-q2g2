import { ConsultantTableStyled } from "./styles";
import { useProperties } from "../../../providers/Properties";
import { useHistory } from "react-router-dom";

import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { GiPartyPopper } from "react-icons/gi";

function ConsultantTable() {
  const { properties } = useProperties();
  const history = useHistory();

  return (
    <ConsultantTableStyled>
      {properties.every(
        (property) => property.consultantStatus !== "em aberto"
      ) ? (
        <div className="null-consult">
          <p>Não há análises pendentes, agradecemos seu trabalho!</p>
          <GiPartyPopper />
        </div>
      ) : (
        <div className="table-container">
          <h3>Análises Pendentes</h3>
          <table>
            <tr>
              <th>Título</th>
              <th>Acesso</th>
            </tr>
            {properties.map((property, index) => (
              <>
                {property.consultantStatus === "em aberto" ? (
                  <tr>
                    <td>{property.title}</td>
                    <td>
                      <BsFillArrowUpRightCircleFill
                        onClick={() => history.push(`/imovel/${property.id}`)}
                      />
                    </td>
                  </tr>
                ) : null}
              </>
            ))}
          </table>
        </div>
      )}
    </ConsultantTableStyled>
  );
}

export default ConsultantTable;
