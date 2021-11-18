import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { UserData } from "../../assets/Types/user";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AuthProviderProps {
  children: ReactNode;
}

interface UserSignInData {
  email: string;
  password: string;
}

interface AuthProviderData {
  authToken: string;
  userInfo: UserData;
  authenticate: () => void;
  signIn: (UserSignInData: UserSignInData) => void;
  registerUser: (userData: UserData) => void;
  logout: () => void;
  updateUser: (userData: UserData) => void;
  registerPreviousPage: () => void;
  returnPreviousPage: () => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState<string>(
    () => localStorage.getItem("@dihome:token") || ""
  );

  const [userId, setUserId] = useState<string>(
    () => localStorage.getItem("@dihome:id") || ""
  );

  const [userInfo, setUserInfo] = useState<UserData>({} as UserData);

  const [previousPage, setPreviousPage] = useState<string>("/");

  const loginNeeded = () =>
    toast.warn("Você precisa estar logado", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const loginFailed = () =>
    toast.error("Login falhou", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const loginSucceeded = () =>
    toast.success(`Bem-vindo ${userInfo.name}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const registerSucceeded = () =>
    toast.success("Conta criada", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const registerFailed = () =>
    toast.error("Cadastro falhou", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const authenticate = () => {
    if (authToken.length > 0) {
      api
        .get(`/users/${userId}`, {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((response) => {
          setUserInfo({
            id: response.data.id,
            name: response.data.name,
            email: response.data.email,
            telephone: response.data.telephone,
            consultant: response.data.consultant,
            announcedProperties: response.data.announcedProperties,
            bookmarkedProperties: response.data.bookmarkedProperties,
            subscriptionType: response.data.subscriptionType,
            markedDates: response.data.markedDates,
          });
        })
        .catch((err) => {
          console.log(err);
          if (history.location.pathname === "/perfil") {
            setPreviousPage("/perfil");
            history.push("/login");
            loginNeeded();
          }
        });
    }
    if (history.location.pathname === "/perfil" && authToken === "") {
      setPreviousPage("/perfil");
      history.push("/login");
      loginNeeded();
    }
  };

  const returnPreviousPage = () => {
    history.push(previousPage);
  };

  const signIn = (userSignInData: UserSignInData) => {
    api
      .post("/signin", userSignInData)
      .then((response) => {
        localStorage.setItem("@dihome:token", response.data.accessToken);
        localStorage.setItem("@dihome:id", response.data.user.id);
        setAuthToken(response.data.accessToken);
        setUserInfo(response.data.user);
        setUserId(response.data.user.id);
        history.push(previousPage);
        loginSucceeded();
      })
      .catch((err) => loginFailed());
  };

  const registerUser = (userData: UserData) => {
    api
      .post("/register", userData)
      .then((response) => {
        localStorage.setItem("@dihome:token", response.data.accessToken);
        localStorage.setItem("@dihome:id", response.data.user.id);
        setAuthToken(response.data.accessToken);
        setUserInfo(response.data.user);
        setUserId(response.data.user.id);
        history.push(previousPage);
        registerSucceeded();
      })
      .catch((err) => registerFailed());
  };

  const logout = () => {
    localStorage.clear();
    setAuthToken("");
    setUserInfo({} as UserData);
    history.push("/");
  };

  const updateUser = (newUserData: UserData) => {
    setUserInfo(newUserData);

    api
      .patch(`/users/${userId}`, newUserData, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((response) => null)
      .catch((err) => console.log(err));
  };

  const registerPreviousPage = () => {
    setPreviousPage(`${history.location.pathname}`);
  };

  return (
    <AuthContext.Provider
      value={{
        authToken,
        userInfo,
        authenticate,
        signIn,
        registerUser,
        logout,
        updateUser,
        registerPreviousPage,
        returnPreviousPage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
