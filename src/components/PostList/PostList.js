import React, { useContext, useState, useEffect } from "react";
import Button from "../../shared/form-elements/button";
import { PostListContainer, CardButtonArea } from "./post-list.styles";
import { Column, Paragraph, Row, Title } from "../../shared/shared.styles";
import Climber from "../../shared/images/IMG_2280.jpeg";
import { useHistory } from "react-router-dom";

// import PostPage from "../../pages/post-page/post-page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faEdit } from "@fortawesome/free-solid-svg-icons";

const PostList = (props) => {
  const history = useHistory();
  console.log("allPosts PostList", JSON.stringify(props.posts));

  const updateCard = (post) => {
    history.push(`/admin-page/${post.id}`);
  };

  const goToPost = (props) => {
    history.push({ pathname: `/posts/${props.id}`, state: props });
  };

  const foundPosts = props.posts.map((post) => {
    return (
      <PostListContainer key={post.id}>
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
              <Paragraph className="card-title">{post.title}</Paragraph>
              {/* <Title>{post.title}</Title> */}

              {/* <CardButtonArea> */}
            </Row>
            <Row className="button-area">
              <Button onClick={() => goToPost(post)} className="card-button">
                {/* {post.title} */}
                View Post
              </Button>
            </Row>
            {/* <Row>
              {authContext.userId ? (
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
            </Row> */}
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
