import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import PayPage from "../pages/PayPage";
import Profile from "../pages/Profile";
import PropertyPage from "../pages/PropertyPage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/imoveis">
        <Dashboard />
      </Route>
      <Route path="/imovel/:id">
        <PropertyPage />
      </Route>
      <Route path="/perfil">
        <Profile />
      </Route>
      <Route path="/planos">
        <PayPage />
      </Route>
    </Switch>
  );
}

export default Routes;
