import React, { useState, useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "./context/authContext";

const PrivateRoute = (props) => {
  console.log("---PrivateRoute fired---");
  const [authState, setAuthState] = useContext(AuthContext);
  console.log("PrivateRoute authState", authState);
  const storedData = JSON.parse(localStorage.getItem("userData"));

  //  if (storedData && storedData.userId) {
  //   setAuthState((prevState) => {
  //     return { ...prevState, isLoggedIn: !prevState.isLoggedIn };
  //   });
  // }

  const { component: Component, ...rest } = props;
  if (storedData && storedData.userId) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }
  //redirect if there is no user
  return <Redirect to="/auth-page" />;
};

export default PrivateRoute;
