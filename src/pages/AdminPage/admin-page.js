import React, { useState, useEffect, useContext } from "react";
import { Container, Column, Paragraph } from "../../shared/shared.styles";
import { AdminPageContainer } from "./admin-page-styles";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { useHttpClient } from "../../shared/hooks/http-hook";
import AuthContext from "../../shared/context/authContext";
import PrivateRoute from "../../shared/PrivateRoute";

import PostList from "../../components/PostList/PostList";
import NewPostForm from "../../components/Forms/NewPostForm";
import UpdateForm from "../../components/Forms/UpdatePostForm"

const AdminPage = () => {
  console.log("---AdminPage fired---");
  const [loadedPosts, setLoadedPosts] = useState([]);
  const { sendRequest } = useHttpClient();
  const [authState] = useContext(AuthContext);

  useEffect(() => {
    console.log("useEffect fired");
    const fetchPosts = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/posts/${authState.userId}`
        );
        setLoadedPosts(responseData.posts);
        console.log("adminPage responseData.posts", responseData.posts);
      } catch (err) {
        console.log("err", err);
      }
    };
    fetchPosts();
  }, [authState.userId, sendRequest]);
  console.log("adminPage loadedPosts", loadedPosts);

  return (
    <AdminPageContainer id="admin-container">
      <Column id="admin-col-left">
        <Paragraph>{authState.email}</Paragraph>
        <PostList posts={loadedPosts} />
      </Column>
      <Column id="admin-col-left">
        <NewPostForm addNewPost={setLoadedPosts} loadedPosts={loadedPosts} />
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <PrivateRoute exact path="/:uid" component={NewPostForm} />
            <PrivateRoute exact path="/:uid/:pid" component={UpdateForm} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Column>
    </AdminPageContainer>
  );
};
export default AdminPage;
