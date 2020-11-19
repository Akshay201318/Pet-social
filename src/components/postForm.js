import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "../postForm.css";

//This is a custom hook for creating form inputs

// function useFormInputs(initialValue) {
//   const [value, setValue] = useState(initialValue);

//   function handleChange(e) {
//     const isCheckbox = e.target.type === "checkbox";

//     e.target.name === isCheckbox
//       ? setValue(e.target.checked)
//       : setValue(e.target.value);
//   }

//   function reset(e) {
//     const isCheckbox = e.target.type === "checkbox";
//     e.target.name === isCheckbox ? setValue(false) : setValue("");
//   }

//   return {
//     value,
//     handleChange,
//     reset,
//     setValue,
//   };
// }

function PostForm(props) {
  const userData = useSelector((state) => state.user);
  const [selectedFile, setSelectedFile] = useState(null);
  const [content, setContent] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [selectedFileErr, setSelectedFileErr] = useState("");
  // const formData = new FormData();
  // const handleImageUpload = (e) => {
  //   formData.append("avatar", e.target.avatar.files[0]);
  // };
  //function for removing or adding form at the screen
  const handlePost = () => {
    if (props.user) {
      props.change(0);
    } else {
      props.change(1);
    }
  };

  // function for validating the from inputs

  const validate = () => {
    let flag = true;
    console.log("Hello! validate");
    if (content === "") {
      setNameErr("This field should not be empty!");
      flag = false;
    }

    if (selectedFile === null) {
      setSelectedFileErr("Please add a file to upload!");
      flag = false;
    } else {
      setSelectedFileErr("");
    }
    return flag;
  };

  //function for recieving the uploaded file
  // function fileChangedHandler(event) {
  //   selectedFile.setValue(event.target.files[0]);
  // }

  //function for handling the upload post click

  const uploadHandler = async (event) => {
    event.preventDefault();
    let ans = validate();
    console.log(ans);
    if (ans) {
      console.log(selectedFile);
      const headers = {
        "content-type": "multipart/form-data",
      };

      const formData = new FormData();
      formData.append("mypost", selectedFile);
      formData.append("content", content);
      formData.append("user", userData[0]._id);
      // const post = {
      //   content: content,
      //   avatar: selectedFile.name,
      //   user: userData[0]._id,
      // };

      // let response1 = await axios.post("http://localhost:5000/postImage", {
      //   headers:{
      //     'Content-Type':'multipart/form-data',
      //     'Accept':'application/json'
      //   },
      //   data: formData,
      // });

      let response = await axios.post(
        "http://localhost:5000/postImage",
        formData,
        headers
      );
      console.log("Response is equal to", response.data.avatar);
      setContent("");
      setSelectedFile(null);
      setSelectedFileErr("");
      setNameErr("");
      handlePost();
    }
  };

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
        <textarea
          id="name"
          type="text"
          content="name"
          placeholder="Type here....."
          rows="5"
          cols="50"
          onChange={(e) => {
            setContent(e.target.value);
          }}
          required
        />
        <div style={{ color: "red" }}>{nameErr}</div>
        <input
          type="file"
          name="avatar"
          id="post"
          placeholder="post"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          required
        />
        <div style={{ color: "red" }}>{selectedFileErr}</div>
        <input type="submit" defaultValue="upload" onClick={uploadHandler} />
      </form>
    </div>
  );
}

export default PostForm;
