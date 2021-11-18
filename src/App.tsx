import React from "react";
import "./App.css";

import { useEffect } from "react";

import GlobalStyle from "./styles/global";
import Routes from "./routes";

import { useAuth } from "./providers/Authentication";
import { useProperties } from "./providers/Properties";
import KommunicateChat from "./components/Chat/chat.js";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <KommunicateChat />
    </div>
  );
}

export default App;
