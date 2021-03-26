import React, { useContext } from "react";
import { TopMenuContainer, LoggedInIcons } from "./top-menu-styles.js";
import { Container, Column, Row, Paragraph } from "../../shared/shared.styles";
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
      login(
        responseData.userId,
        responseData.token,
        responseData.userPosts,
        responseData.email
      );
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
      <div className="top-left">
        <Paragraph
          onClick={() => {
            history.push("/");
          }}
        >
          @mattattheworld_
        </Paragraph>
      </div>
      <div className="top-right">
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
          <div className=" ">
            <FontAwesomeIcon
              className="logged-in-icon"
              icon={faUserAstronaut}
              color="#E75B26"
              onClick={() => history.push("/admin-page")}
            />
            <FontAwesomeIcon
              className="logged-in-icon"
              icon={faSignOutAlt}
              color="#E75B26"
              onClick={logoutHandler}
            />
          </div>
        )}
      </div>
    </TopMenuContainer>
  );
};

export default TopMenu;
