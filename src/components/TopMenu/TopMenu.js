import React, { useContext } from "react";
import { TopMenuContainer } from "./top-menu-styles.js";

import { useHistory } from "react-router-dom";
import { appendErrors, useForm } from "react-hook-form";

import AuthContext from "../../shared/context/authContext";

import { useHttpClient } from "../../shared/hooks/http-hook";

const TopMenu = () => {
  const [authState, setAuthState, login, logout] = useContext(AuthContext);
  console.log("TopMenu authState", authState);

  const { register, handleSubmit } = useForm();
  const { sendRequest } = useHttpClient();
  let history = useHistory();

  const submitLogin = async (data) => {
    console.log("submitLogin data", data.email);
    try {
      const responseData = await sendRequest(
        "http://localhost:5000/api/users/login",
        "POST",
        JSON.stringify({
          email: data.email,
          password: data.password,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      login(responseData.userId, responseData.token, responseData.userPosts);
    } catch (err) {
      console.log("onSubmit err", err);
    }
    history.push("/admin-page");
  };

  const logoutHandler = () => {
    logout();
    history.push("/");
  };

  return (
    <TopMenuContainer>
      {!authState.isLoggedIn && (
        <form onSubmit={handleSubmit(submitLogin)}>
          <input type="text" placeholder="Email" name="email" ref={register} />
          <input
            type="password"
            placeholder="Password"
            name="password"
            ref={register}
          />
          {appendErrors.password && <p>{appendErrors.password.message}</p>}
          <input type="submit" />
        </form>
      )}
      {authState.isLoggedIn && <button onClick={logoutHandler}> Logout</button>}
    </TopMenuContainer>
  );
};

export default TopMenu;
