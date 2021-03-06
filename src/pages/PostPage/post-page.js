import React from "react";
import { PostPageContainer } from "./post-page-styles";
import { useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../shared/images/logo.svg";
import Linkify from "react-linkify";

const PostPage = (props) => {
  const history = useHistory();
  const postDetails = history.location.state;
  console.log("PostPage props", postDetails);

  return (
    <PostPageContainer>
      <div className="post-image-section-container">
        <div className="post-image-container">
          <img
            src={`http://localhost:5000/${postDetails.postImageOne}`}
            alt={postDetails.postImageOne}
          />
        </div>
        <div className="post-image-container">
          <img
            src={`http://localhost:5000/${postDetails.postImageTwo}`}
            alt={postDetails.postImageTwo}
          />
        </div>
      </div>
      <div className="post-section-container">
        <h1>{postDetails.title}</h1>
        <Linkify>
          <div className="post-content">{postDetails.content}</div>
        </Linkify>
        <Logo className="logo" />
      </div>
    </PostPageContainer>
  );
};

export default PostPage;
