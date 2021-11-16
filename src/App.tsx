import React from "react";
import "./App.css";

import { useEffect } from "react";

import GlobalStyle from "./styles/global";
import Routes from "./routes";

import { useAuth } from "./providers/Authentication";
import { useProperties } from "./providers/Properties";
import Header from "./components/Header";

function App() {
  const { authenticate } = useAuth();
  const { getProperties } = useProperties();

  useEffect(() => {
    authenticate();
    getProperties();
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
