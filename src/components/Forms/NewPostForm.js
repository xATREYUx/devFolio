import React, { useState, useContext, useEffect } from "react";
import { NewPostFormContainer } from "./new-post-form-styles.js";

import { appendErrors, useForm } from "react-hook-form";

import AuthContext from "../../shared/context/authContext";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ImageUpload from "../../shared/form-elements/image-upload";
import Button from "../../shared/form-elements/button";

const NewPostForm = (props) => {
  const [authState, setAuthState, login, logout] = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  console.log("register", register);
  const { sendRequest } = useHttpClient();
  const [pickedCardImage, setPickedCardImage] = useState();
  const [pickedCardImageOne, setPickedCardImageOne] = useState();
  const [pickedCardImageTwo, setPickedCardImageTwo] = useState();
  const [resetComponent, setResetComponent] = useState(false);
  console.log("newFormData loadedPosts", props.loadedPosts);

  const resetForm = () => setResetComponent(!resetComponent);

  const submitPost = async (data) => {
    try {
      console.log("send data", data);
      console.log("send pickedCardImage", pickedCardImage);

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("caption", data.caption);
      formData.append("content", data.content);
      formData.append("cardImage", pickedCardImage);
      formData.append("postImageOne", pickedCardImageOne);
      formData.append("postImageTwo", pickedCardImageTwo);

      const response = await sendRequest(
        "http://localhost:5000/api/posts",
        "POST",
        formData,
        {
          Authorization: "Bearer " + authState.token,
        }
      );
      console.log("newpostform response", response);
      props.addNewPost((prevState) => [response.post, ...prevState]);
      resetForm()
      reset()
     } catch (err) {
      console.log("submitPost err", err);
    }
  };

  return (
    <NewPostFormContainer>
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
        <br />
        {/* <input
          type="text"
          placeholder="Image"
          name="cardImage"
          ref={register}
        /> */}
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
    </NewPostFormContainer>
  );
};

export default NewPostForm;
