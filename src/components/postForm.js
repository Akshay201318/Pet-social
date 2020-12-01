import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState(null);
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [categoryErr, setCategoryErr] = useState("");
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
    } else {
      setNameErr("");
    }
    if (category === "") {
      setCategoryErr("This field should not be empty!");
      flag = false;
    } else {
      setCategoryErr("");
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
      formData.append("category", category);
      formData.append("firstname", userData.firstName);
      formData.append("lastname", userData.lastName);
      formData.append("email", userData.email);
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
      if (response) {
        props.setPostsRender(props.postsRender + 1);
        console.log("Thindblnscsncxbsj", props.postsRender);
        // history.push("/login");
        // history.push("/home");
      }
      setContent("");
      setSelectedFile(null);
      setSelectedFileErr("");
      setNameErr("");
      handlePost();
    }
  };

  return (
    <div
      id="formDiv"
      className="container rounded fixed-top d-flex align-items-center justify-content-center border border-warning"
    >
      <form
        id="postForm"
        className="form"
        encType="multipart/form-data"
        method="post"
      >
        <button id="cancel" type="button" onClick={handlePost}>
          &#10006;
        </button>
        <div className="form-group">
          <textarea
            className="form-control text-center rounded-pill form-control-lg"
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
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control rounded-pill form-control-lg"
            name="category"
            placeholder="Enter category..."
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control rounded-pill form-control-lg"
            type="file"
            name="avatar"
            id="post"
            placeholder="post"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            required
          />
          <div style={{ color: "red" }}>{selectedFileErr}</div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="form-control rounded-pill form-control-lg"
            defaultValue="upload"
            onClick={uploadHandler}
          />
        </div>
      </form>
    </div>
  );
}

export default PostForm;
