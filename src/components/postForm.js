import React from "react";
import "../postForm.css";

class postForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null,
      name: "",
      nameErr: "",
      fileErr: "",
    };
  }

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";

    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let fla = true;
    console.log("Hello! validate");
    if (this.state.name === "") {
      this.setState({
        nameErr: "This field should not be empty!",
      });
      fla = false;
    } else if (
      !this.state.name.match(
        /^(?=[a-zA-Z0-9._]{6,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/
      )
    ) {
      this.setState({
        nameErr:
          "Username atleast 6 characters long and must contains only lowercase or uppercase latters!",
      });
      fla = false;
    } else {
      this.setState({
        nameErr: "",
      });
    }

    if (this.state.selectedFile === null) {
      this.setState({
        fileErr: "Please add afile to upload!",
      });
      fla = false;
    } else {
      this.setState({
        fileErr: "Please add a file to upload!",
      });
    }
    return fla;
  };

  fileChangedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };
  uploadHandler = (event) => {
    event.preventDefault();
    let ans = this.validate();
    console.log(ans);
    if (ans) {
      this.setState({
        selectedFile: null,
        name: "",
        nameErr: "",
        fileErr: "",
      });
      this.handlePost();
      console.log(this.state.selectedFile);
    }
  };

  handlePost = () => {
    var x = document.getElementById("postForm");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  render() {
    return (
      <div id="formDiv">
        <form
          id="postForm"
          className="form"
          encType="multipart/form-data"
          method="post"
        >
          <button id="cancel" type="button" onClick={this.handlePost}>
            &#10006;
          </button>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name"
            onChange={this.handleChange}
            required
          />
          <div style={{ color: "red" }}>{this.state.nameErr}</div>
          <input
            type="file"
            name="avatar"
            id="post"
            placeholder="post"
            onChange={this.fileChangedHandler}
            required
          />
          <div style={{ color: "red" }}>{this.state.fileErr}</div>
          <input
            type="submit"
            defaultValue="upload"
            onClick={this.uploadHandler}
          />
        </form>
      </div>
    );
  }
}

export default postForm;
