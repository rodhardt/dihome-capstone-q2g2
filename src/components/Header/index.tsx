import { useEffect, useState } from "react";

import { HeaderStyled } from "./styles";
import { Link, useHistory } from "react-router-dom";
import logoWithoutName from "../../assets/Images/logoWithoutName.png";
import { useAuth } from "../../providers/Authentication";
import { VscAccount } from "react-icons/vsc";
function Header() {
  const { userInfo, logout } = useAuth();
  const history = useHistory();

  return (
    <>
      <HeaderStyled>
        <div className="image-container">
          <Link className="imageLink" to="/">
            <img
              className="linkImage"
              src={logoWithoutName}
              alt="botão da home page"
            />
          </Link>
        </div>
        <Link className="link text" to="/imoveis">
          Imoveis
        </Link>
        <Link className="link text" to="/perfil">
          Anuncie aqui
        </Link>
        {!!userInfo.id ? (
          <div className="last menu-container">
            <Link className="link profile last" to="/perfil">
              <VscAccount className="linkFont" />
            </Link>
            <ul className="logged-options">
              <li onClick={() => history.push("/perfil")}>Perfil</li>
              <li onClick={() => logout()}>Logout</li>
            </ul>
          </div>
        ) : (
          <Link className="link login last" to="/login">
            Login
          </Link>
        )}
      </HeaderStyled>
    </>
  );
}

export default Header;
