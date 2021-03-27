import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "./shared/context/authContext";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import HomePage from "./pages/HomePage/home-page";
import AdminPage from "./pages/AdminPage/admin-page";
import AuthPage from "./pages/AuthPage/auth-page";
import PostPage from "./pages/PostPage/post-page";
import AboutMePage from "./pages/AboutMePage/about-me-page"


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
        <Router basename={process.env.PUBLIC_URL}>
          <TopMenu />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/auth-page" component={AuthPage} />
            <PrivateRoute exact path="/admin-page" component={AdminPage} />
            <Route exact path="/about-me-page" component={AboutMePage} />
            <Route exact path="/posts/:pid" component={PostPage} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
};

export default App;

//to connect clients and streamline processes using information texhnology
