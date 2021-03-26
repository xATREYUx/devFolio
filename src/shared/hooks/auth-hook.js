import { useState, useCallback, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/authContext";

const useAuth = () => {
  console.log("---useAuth Fired---");

  const [authState, setAuthState] = useState({
    token: null,
    userId: null,
    isLoggedIn: false,
    email: null,
  });
  const [tokenExpirationDate, setTokenExpirationDate] = useState();

  const login = useCallback(
    (userId, token, userPosts, email, expirationDate) => {
      console.log("login Fired");
      const tokenExpirationDate =
        expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
      setTokenExpirationDate(tokenExpirationDate);

      try {
        setAuthState((prevState) => {
          return {
            ...prevState,
            isLoggedIn: true,
            userId: userId,
            token: token,
            email: email,
          };
        });
        localStorage.setItem(
          "userData",
          JSON.stringify({
            userId: userId,
            email: email,
            token: token,
            expiration: tokenExpirationDate.toISOString(),
          })
        );
      } catch (err) {
        console.log("login err", err);
      }
    },
    []
  );

  const logout = () => {
    console.log("auth-hook logout fired ");
    localStorage.removeItem("userData");
    setAuthState({
      token: null,
      userId: null,
      isLoggedIn: false,
      login: login,
      logout: logout,
      email: null,
    });
  };

  let logoutTimer;
  useEffect(() => {
    if (authState.token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [authState.token, logout, authState.expiration]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);
  // useEffect(() => {
  // if (authState.token && authState.tokenExpirationDate) {
  //   const remainingTime =
  //     authState.tokenExpirationDate.getTime() - new Date().getTime();
  //   logoutTimer = setTimeout(authState.logout, remainingTime);
  // } else {
  //   console.log("clearTimer fired");
  //   clearTimeout(logoutTimer);
  // }
  // }, [authState.token, authState.tokenExpirationDate, authState.logout]);

  // const checkLogin = useCallback(() => {
  // const storedData = JSON.parse(localStorage.getItem("userData"));
  //   const checkLocalStorage = () => {
  //     if (
  //       storedData &&
  //       storedData.token &&
  //       new Date(storedData.expiration) > new Date()
  //     ) {
  //       console.log("storedData console.log", storedData);
  //       login(
  //         storedData.userId,
  //         storedData.token,
  //         new Date(storedData.expiration)
  //       );
  //       setIsLoggedIn(true);
  //     }
  //   };
  //   checkLocalStorage();
  //   return isLoggedIn;
  // }, []);

  return [authState, setAuthState, login, logout];
};

export default useAuth;
