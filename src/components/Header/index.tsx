import { HeaderStyled } from "./styles";
import { Link } from "react-router-dom";
import dihome2 from "../../assets/Images/dihome2.png";
import { useAuth } from "../../providers/Authentication";
import { VscAccount } from "react-icons/vsc";
function Header() {
  const { authToken, logout } = useAuth();

  return (
    <HeaderStyled>
      {authToken === "" ? (
        <div className="notLoged">
          <Link className="LinkImageLINK" to="/">
            <img className="LinkImage" src={dihome2} alt="botão da home page" />
          </Link>
          <Link className="Link" to="/imoveis">
            Imoveis
          </Link>
          <Link className="Link" to="/registrar">
            Registro
          </Link>
          <Link className="Link" to="/login">
            Login
          </Link>
        </div>
      ) : (
        <div className="Logged">
          <Link className="LinkImageLINK" to="/">
            <img className="LinkImage" src={dihome2} alt="botão da home page" />
          </Link>
          <Link className="Link" to="/imoveis">
            Imoveis
          </Link>
          <Link
            className="Link"
            to=""
            onClick={() => {
              logout();
            }}
          >
            Logout
          </Link>
          <Link className="Link" to="/perfil">
            <VscAccount className="LinkFont" />
          </Link>
        </div>
      )}
    </HeaderStyled>
  );
}

export default Header;
