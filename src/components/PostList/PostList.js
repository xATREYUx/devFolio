import React, { useContext, useState, useEffect } from "react";
import { Column, Paragraph, Row, Title } from "../../shared/shared.styles";

// import PostPage from "../../pages/post-page/post-page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faEdit } from "@fortawesome/free-solid-svg-icons";

import { useHistory, useParams } from "react-router-dom";
import AuthContext from "../../shared/context/authContext";

import Button from "../../shared/form-elements/button";
import { PostListContainer, CardButtonArea } from "./post-list.styles";
import Climber from "../../shared/images/IMG_2280.jpeg";

const PostList = (props) => {
  const history = useHistory();
  const [authState] = useContext(AuthContext);

  console.log("allPosts PostList", props);

  const updateCard = (post) => {
    history.push(`/post/${post.id}`);
  };

  const goToPost = (props) => {
    history.push({ pathname: `/posts/${props.id}`, state: props });
  };
  console.log("PostList props", props);
  const foundPosts = props.posts.slice(0, 5).map((post) => {
    return (
      <PostListContainer key={post.id} id="post-list-container">
        <Paragraph className="caption-area">{post.caption}</Paragraph>
        <Row>
          <Column className="col-left">
            <img
              src={`http://localhost:5000/${post.cardImage}`}
              alt={post.title}
            />
          </Column>
          <Column className="col-right">
            <Row className="title-area">
              <h2 className="card-title">{post.title}</h2>
              {/* <Title>{post.title}</Title> */}
              {/* <CardButtonArea> */}
            </Row>
            <Row className="button-area">
              <Button onClick={() => goToPost(post)} className="card-button">
                {/* {post.title} */}
                View Post
              </Button>
            </Row>
            <Row>
              {authState.userId ? (
                <>
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    color="orange"
                    onClick={() => goToPost(post)}
                  />
                  <FontAwesomeIcon
                    icon={faEdit}
                    onClick={() => updateCard(post)}
                    color="red"
                  />
                </>
              ) : null}
            </Row>
            {/* </CardButtonArea> */}
          </Column>
        </Row>
      </PostListContainer>
    );
  });
  return <div>{foundPosts}</div>;
  // return <div>props</div>;
};
export default PostList;
