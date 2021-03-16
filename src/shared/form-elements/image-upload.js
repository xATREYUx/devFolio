import React, { useRef, useState, useEffect } from "react";

import Button from "./button";
import { ImageUploadContainer } from "./form-elements-style";

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef(props.inputRef);

  useEffect(() => {
    if (!file) {
      console.log("file not loaded");
      return;
    }
    console.log("file picked", file);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
      props.selectedImage(file);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (event) => {
    console.log("pickedHandler", event.target);
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      console.log("pickedFile", pickedFile.name);
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      console.log("pickedHandler target.files != 1");
      setIsValid(false);
      fileIsValid = false;
    }
    // props.onInput(props.id, pickedFile, fileIsValid);
  };

  const pickImageHandler = () => {
    console.log(props);
    filePickerRef.current.click();
  };

  return (
    <ImageUploadContainer>
      <input
         ref={filePickerRef}
        style={{ display: "none" }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          {!previewUrl && <p>Please pick an image.</p>}
        </div>
        <Button type="button" onClick={pickImageHandler}>
          PICK IMAGE
        </Button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </ImageUploadContainer>
  );
};

export default ImageUpload;
