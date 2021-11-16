import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { UserData } from "../../assets/Types/user";

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

  const authenticate = () => {
    if (authToken !== "") {
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
          });
        })
        .catch((err) => console.log(err));
    }
    if (history.location.pathname === "/perfil" && authToken === "") {
      setPreviousPage("/perfil");
      history.push("/login");
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
      })
      .catch((err) => console.log(err));
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
      })
      .catch((err) => console.log(err));
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
