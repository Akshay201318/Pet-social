import React, { useState } from "react";
import "../postForm.css";

//This is a custom hook for creating form inputs

function useFormInputs(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    const isCheckbox = e.target.type === "checkbox";

    e.target.name == isCheckbox
      ? setValue(e.target.checked)
      : setValue(e.target.value);
  }

  function reset(e) {
    const isCheckbox = e.target.type === "checkbox";
    e.target.name == isCheckbox ? setValue(false) : setValue("");
  }

  return {
    value,
    handleChange,
    reset,
    setValue,
  };
}

function PostForm(props) {
  const selectedFile = useFormInputs(null);
  const name = useFormInputs("");
  const [nameErr, setNameErr] = useState("");
  const [selectedFileErr, setSelectedFileErr] = useState("");

  //function for removing or adding form at the screen
  function handlePost() {
    if (props.user) {
      props.change(0);
    } else {
      props.change(1);
    }
  }

  // function for validating the from inputs

  function validate() {
    let flag = true;
    console.log("Hello! validate");
    if (name.value === "") {
      setNameErr("This field should not be empty!");
      flag = false;
    } else if (
      !name.value.match(/^(?=[a-zA-Z0-9._]{6,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/)
    ) {
      setNameErr(
        "Username atleast 6 characters long and must contains only lowercase or uppercase latters!"
      );
      flag = false;
    } else {
      setNameErr("");
    }

    if (selectedFile.value === null) {
      setSelectedFileErr("Please add afile to upload!");
      flag = false;
    } else {
      setSelectedFileErr("");
    }
    return flag;
  }

  //function for recieving the uploaded file
  function fileChangedHandler(event) {
    selectedFile.setValue(event.target.files[0]);
  }

  //function for handling the upload post click

  function uploadHandler(event) {
    event.preventDefault();
    let ans = validate();
    console.log(ans);
    if (ans) {
      name.reset(event);
      selectedFile.reset(event);
      setSelectedFileErr("");
      setNameErr("");
      handlePost();
      console.log(selectedFile.value);
    }
  }

  return (
    <div id="formDiv">
      <form
        id="postForm"
        className="form"
        encType="multipart/form-data"
        method="post"
      >
        <button id="cancel" type="button" onClick={handlePost}>
          &#10006;
        </button>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
          onChange={name.handleChange}
          required
        />
        <div style={{ color: "red" }}>{nameErr}</div>
        <input
          type="file"
          name="avatar"
          id="post"
          placeholder="post"
          onChange={fileChangedHandler}
          required
        />
        <div style={{ color: "red" }}>{selectedFileErr}</div>
        <input type="submit" defaultValue="upload" onClick={uploadHandler} />
      </form>
    </div>
  );
}

export default PostForm;
