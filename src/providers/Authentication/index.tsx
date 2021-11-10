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
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState<string>(
    () => localStorage.getItem("@dihome:token") || ""
  );

  const [userInfo, setUserInfo] = useState<UserData>({} as UserData);

  const authenticate = () => {
    if (authToken !== "") {
      api
        .get("/users", {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((response) => setUserInfo(response.data))
        .catch((err) => console.log(err));
    }
  };

  const signIn = (userSignInData: UserSignInData) => {
    api
      .post("/signin", userSignInData)
      .then((response) => {
        localStorage.setItem("@dihome:token", response.data.accessToken);
        setAuthToken(response.data.accessToken);
        setUserInfo(response.data);
      })
      .catch((err) => console.log(err));
  };

  const registerUser = (userData: UserData) => {
    api
      .post("/users", userData)
      .then((response) => {
        localStorage.setItem("@dihome:token", response.data.accessToken);
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

  return (
    <AuthContext.Provider
      value={{
        authToken,
        userInfo,
        authenticate,
        signIn,
        registerUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
