import React, { useState, useContext, useEffect } from "react";
import { FormContainer } from "./new-post-form-styles.js";

import { useHistory, useParams } from "react-router-dom";

import { appendErrors, useForm } from "react-hook-form";

import AuthContext from "../../shared/context/authContext";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ImageUpload from "../../shared/form-elements/image-upload";
import Button from "../../shared/form-elements/button";

const UpdatePostForm = (props) => {
  let history = useHistory();
  const [authState, setAuthState, login, logout] = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  console.log("register", register);
  const { sendRequest } = useHttpClient();
  const [pickedCardImage, setPickedCardImage] = useState();
  const [pickedCardImageOne, setPickedCardImageOne] = useState();
  const [pickedCardImageTwo, setPickedCardImageTwo] = useState();
  const [loadedPost, setLoadedPost] = useState();

  const postId = useParams().pid;

  const [resetComponent, setResetComponent] = useState(false);
  console.log("newFormData loadedPosts", props.loadedPosts);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/posts/${postId}`
        );
        setLoadedPost(responseData.post);
        const formData = new FormData();
        formData.append("title", responseData.post.title);
        formData.append("caption", responseData.post.caption);
        formData.append("content", responseData.post.content);
        formData.append("cardImage", responseData.post.pickedCardImage);
        formData.append("postImageOne", responseData.post.pickedCardImageOne);
        formData.append("postImageTwo", responseData.post.pickedCardImageTwo);
      } catch (err) {}
    };
    fetchPlace();
  }, [sendRequest, postId]);

  const resetForm = () => setResetComponent(!resetComponent);

  const submitPost = async (data) => {
    try {
      console.log("send data", data);

      const response = await sendRequest(
        "http://localhost:5000/api/posts",
        "PATCH",
        JSON.stringify({
          title: data.title,
          caption: data.caption,
          content: data.content,
          pickedCardImage: data.pickedCardImage,
          pickedCardImageOne: data.pickedCardImageOne,
          pickedCardImageTwo: data.pickedCardImageTwo,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authState.token,
        }
      );
      resetForm();
      reset();
    } catch (err) {
      console.log("submitPost err", err);
    }
  };

  return (
    <FormContainer>
      <form id="new-post-form" onSubmit={handleSubmit(submitPost)}>
        <h1>New Post</h1>
        <br />
        <label>Title</label>
        <br />
        <input type="text" placeholder="Title" name="title" ref={register} />
        <br />
        <label>Caption</label>
        <br />
        <input
          type="text"
          placeholder="42 Charachter Limit"
          name="caption"
          maxLength="42"
          ref={register}
        />
        <br />
        <label>Content</label>
        <br />
        <textarea
          type="textarea"
          placeholder="Content"
          name="content"
          cols="30"
          rows="10"
          ref={register}
        />
        <br />
        <ImageUpload
          name="cardImage"
          displayName="Card Image"
          inputRef={register}
          selectedImage={setPickedCardImage}
          resetForm={resetComponent}
        />
        <ImageUpload
          name="postImageOne"
          displayName="Post Image One"
          inputRef={register}
          selectedImage={setPickedCardImageOne}
          resetForm={resetComponent}
        />
        <ImageUpload
          name="postImageTwo"
          displayName="Post Image Two"
          inputRef={register}
          selectedImage={setPickedCardImageTwo}
          resetForm={resetComponent}
        />
        {/* <input ref={register} name="cardImage" type="file" /> */}
        {appendErrors.password && <p>{appendErrors.password.message}</p>}
        <br />
        <Button type="submit">Post</Button>
      </form>
    </FormContainer>
  );
};

export default UpdatePostForm;
