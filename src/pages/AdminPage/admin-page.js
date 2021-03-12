import React, { useState, useEffect, useContext } from "react";
import { Container, Column } from "../../shared/shared.styles"
import { useHttpClient } from "../../shared/hooks/http-hook";
import AuthContext from "../../shared/context/authContext";
import { AdminPageContainer } from "./admin-page-styles";
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
        console.log("responseData homePage", responseData);
      } catch (err) {
        console.log("err", err);
      }
    };
    fetchPosts();
  }, [authState.userId, sendRequest]);
  return (
    <AdminPageContainer>
      <Column>
        <PostList posts={loadedPosts} />
      </Column>
      <Column>
        <NewPostForm />
      </Column>
    </AdminPageContainer>
  );
};
export default AdminPage;
