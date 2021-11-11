import { FooterStyled } from "./styles";

import { MdAlternateEmail } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { SiWhatsapp } from "react-icons/si";

function Footer() {
  return (
    <FooterStyled>
      <div className="footer-card">
        <h4>Contatos</h4>
        <p>
          <div className="icon-container">
            <MdAlternateEmail />
          </div>
          adm@dihome.com.br
        </p>
        <p>
          <div className="icon-container">
            <GrInstagram />
          </div>
          adihomedigital
        </p>
        <p>
          <div className="icon-container">
            <SiWhatsapp />
          </div>
          (51)999-999-999
        </p>
      </div>
    </FooterStyled>
  );
}

export default Footer;
