import React, { useContext } from "react";
import { TopMenuContainer, LoggedInIcons } from "./top-menu-styles.js";
import { Container, Column, Row } from "../../shared/shared.styles";
import Button from "../../shared/form-elements/button";

import { useHistory, Link } from "react-router-dom";
import { appendErrors, useForm } from "react-hook-form";

import AuthContext from "../../shared/context/authContext";

import { useHttpClient } from "../../shared/hooks/http-hook";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faEdit,
  faCode,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";

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
      <Column className="top-left">
        <div
          onClick={() => {
            history.push("/");
          }}
        >
          @mattattheworld
        </div>
      </Column>
      <Column className="top-right">
        {!authState.isLoggedIn && (
          <Row>
            <form onSubmit={handleSubmit(submitLogin)}>
              <input
                type="text"
                placeholder="Email"
                name="email"
                ref={register}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                ref={register}
              />
              {appendErrors.password && <p>{appendErrors.password.message}</p>}
              <button type="submit" className="top-menu-submit">
                <FontAwesomeIcon
                  icon={faCode}
                  color="#E75B26"
                  onClick={logoutHandler}
                />
              </button>
            </form>
          </Row>
        )}
        {authState.isLoggedIn && (
          <div className="logged-in-icons-container">
            <div className="logged-in-icon"
            >
              <FontAwesomeIcon
                icon={faUserAstronaut}
                color="#E75B26"
                onClick={() => history.push("/admin-page")}
              />
            </div>
            <div className="logged-in-icon">
              <FontAwesomeIcon
                icon={faSignOutAlt}
                color="#E75B26"
                onClick={logoutHandler}
              />
            </div>
          </div>
        )}
      </Column>
    </TopMenuContainer >
  );
};

export default TopMenu;
