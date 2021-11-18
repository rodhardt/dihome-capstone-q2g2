import { useEffect, useState } from "react";

import { HeaderStyled } from "./styles";
import { Link, useHistory } from "react-router-dom";
import logoWithoutName from "../../assets/Images/logoWithoutName.png";
import { useAuth } from "../../providers/Authentication";
import { VscAccount } from "react-icons/vsc";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  const { userInfo, logout } = useAuth();
  const history = useHistory();

  const notify = () =>
    toast.warn("Você saiu da conta", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

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
            <div className="link profile last">
              <VscAccount className="linkFont" />
            </div>
            <ul className="logged-options">
              <li onClick={() => history.push("/perfil")}>Perfil</li>
              <li
                onClick={() => {
                  notify();
                  logout();
                }}
              >
                Logout
              </li>
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
