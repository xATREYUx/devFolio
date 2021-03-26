import React, { useState, useEffect, useContext } from "react";
import { Container, Column, Paragraph } from "../../shared/shared.styles";
import { AdminPageContainer } from "./admin-page-styles";

import { useHttpClient } from "../../shared/hooks/http-hook";
import AuthContext from "../../shared/context/authContext";

import PostList from "../../components/PostList/PostList";
import NewPostForm from "../../components/Forms/NewPostForm";

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
      </Column>
    </AdminPageContainer>
  );
};
export default AdminPage;
