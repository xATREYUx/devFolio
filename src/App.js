import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "./shared/context/authContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/home-page";
import AdminPage from "./pages/AdminPage/admin-page";
import AuthPage from "./pages/AuthPage/auth-page";
import TopMenu from "./components/TopMenu/TopMenu";
import PrivateRoute from "./shared/PrivateRoute";

import useAuth from "./shared/hooks/auth-hook";

const App = () => {
  console.log("---App Fired---");
  const [authState, setAuthState, login, logout] = useAuth(AuthContext);
  console.log("App authState", authState);

  return (
    <div className="app-container">
      <AuthContext.Provider value={[authState, setAuthState, login, logout]}>
        <Router>
          <TopMenu />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/auth-page" component={AuthPage} />
            <PrivateRoute exact path="/admin-page" component={AdminPage} />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
