import React from "react";
import "./App.css";

import GlobalStyle from "./styles/global";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
