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
        .then((response) => setUserInfo(response.data))
        .catch((err) => console.log(err));
    }
  };

  const signIn = (UserSignInData: UserSignInData) => {
    api
      .post("/login", UserSignInData)
      .then((response) => {
        localStorage.setItem("@dihome:token", response.data.accessToken);
        localStorage.setItem("@dihome:id", response.data.user.id);
        setAuthToken(response.data.accessToken);
        setUserInfo(response.data);
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
        setUserInfo(response.data);
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    localStorage.clear();
    setAuthToken("");
    setUserInfo({} as UserData);
    history.push("/");
  };

  const registerPreviousPage = () => {
    setPreviousPage(`${history.location.pathname}`);
  };

  const returnPreviousPage = () => {
    history.push(previousPage);
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
        registerPreviousPage,
        returnPreviousPage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
