import React, { useState, useContext } from "react";
import { NewPostFormContainer } from "./new-post-form-styles.js";

import { appendErrors, useForm } from "react-hook-form";

import AuthContext from "../../shared/context/authContext";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ImageUpload from "../../shared/form-elements/image-upload";

const NewPostForm = () => {
  const [authState, setAuthState, login, logout] = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  console.log("register", register);
  const { sendRequest } = useHttpClient();
  const [pickedCardImage, setPickedCardImage] = useState();

  const submitPost = async (data) => {
    try {
      console.log("send data", data);
      console.log("send pickedCardImage", pickedCardImage);

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("caption", data.caption);
      formData.append("content", data.content);
      formData.append("cardImage", pickedCardImage);
      await sendRequest("http://localhost:5000/api/posts", "POST", formData, {
        Authorization: "Bearer " + authState.token,
      });

      // await sendRequest(
      //   "http://localhost:5000/api/posts",
      //   "POST",
      //   {
      //     title: data.title,
      //     caption: data.caption,
      //     content: data.content,
      //     cardImage: data.image[0],
      //   },
      //   {
      //     "Content-Type": "application/json",
      //     Authorization: "Bearer " + authState.token,
      //   }
      // );
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
        />
        <br />
        <label>Content</label>
        <br />
        <input
          type="textarea"
          placeholder="Content"
          name="content"
          ref={register}
        />
        <br />
        <label>Image</label>
        <br />
        {/* <input
          type="text"
          placeholder="Image"
          name="cardImage"
          ref={register}
        /> */}
        <ImageUpload
          name="cardImage"
          inputRef={register}
          selectedImage={setPickedCardImage}
        />
        {/* <input ref={register} name="cardImage" type="file" /> */}
        {appendErrors.password && <p>{appendErrors.password.message}</p>}
        <br />
        <input type="submit" />
      </form>
    </NewPostFormContainer>
  );
};

export default NewPostForm;
