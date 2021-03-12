import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { appendErrors, useForm } from "react-hook-form";
import { Container } from "../../shared/shared.styles";

import { useHttpClient } from "../../shared/hooks/http-hook";
import AuthContext from "../../shared/context/authContext";

const AuthPage = () => {
  const [authState, setAuthState, login] = useContext(AuthContext);
  console.log("AuthPage authState", authState);

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

  const submitSignup = async (data) => {
    setAuthState({
      password: null,
    });
  };

  return (
    <Container>
      <h2>Auth Page</h2>

      <div>Login</div>
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
    </Container>
  );
};

export default AuthPage;
