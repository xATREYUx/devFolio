import React, { useState, useContext } from "react";
import { NewPostFormContainer } from "./new-post-form-styles.js";

import { appendErrors, useForm } from "react-hook-form";

import AuthContext from "../../shared/context/authContext";
import { useHttpClient } from "../../shared/hooks/http-hook";

const NewPostForm = () => {
  const [authState, setAuthState, login, logout] = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const { sendRequest } = useHttpClient();
  const [formData, setFormData] = useState();
  const submitPost = async (data) => {
    try {
      await sendRequest(
        "http://localhost:5000/api/posts",
        "POST",
        JSON.stringify({
          title: data.title,
          caption: data.caption,
          content: data.content,
          cardImage: data.cardImage,
        }),
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authState.token,
        }
      );
    } catch (err) {
      console.log("submitPost err", err);
    }
  };

  return (
    <NewPostFormContainer>
      <form onSubmit={handleSubmit(submitPost)}>
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
          placeholder="Caption"
          name="caption"
          ref={register}
        /><br />
        <label>Content</label><br />
        <input
          type="textarea"
          placeholder="Content"
          name="content"
          ref={register}
        /><br />
        <label>Image</label>
        <br />
        <input
          type="text"
          placeholder="Image"
          name="cardImage"
          ref={register}
        />
        {appendErrors.password && <p>{appendErrors.password.message}</p>}
        <br />

        <input type="submit" />
      </form>
    </NewPostFormContainer>
  );
};

export default NewPostForm;
