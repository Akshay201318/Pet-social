import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import { withRouter, Link } from "react-router-dom";
import "../form.css";
import { check_user } from "../action";

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
  };
}

function Login(props) {
  const dispatch = useDispatch();
  // for changing path on successfull login
  function nextPath(path) {
    props.history.push(path);
  }

  //creating all the form inputs and there handlers

  const email = useFormInputs("");
  const password = useFormInputs("");
  const checkbox = useFormInputs(false);
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  //Validating form inputs

  function validate() {
    let flag = true;
    console.log("Hello! validate");
    if (email.value === undefined) {
      setEmailErr("Email should not be empty!");
      flag = false;
    } else if (email.value.length < 8) {
      setEmailErr("Please enter a valid email!");
      flag = false;
    } else if (!(email.value.includes("@") && email.value.includes(".com"))) {
      setEmailErr("Please include an @ or .com in the email!");
      flag = false;
    } else {
      setEmailErr("");
    }
    if (password.value === "") {
      setPasswordErr("Password must not be empty!");
      flag = false;
    } else if (
      !password.value.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
    ) {
      setPasswordErr(
        "Password must contains minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!"
      );
      flag = false;
    } else {
      setPasswordErr("");
    }
    return flag;
  }

  //submit function for submitting login credentials

  function handleSubmit(event) {
    console.log("Hello! submit");
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      let user = {
        email: email.value,
        password: password.value,
        checkbox: checkbox.value,
      };

      dispatch(check_user(user));
      alert("Successfully!! logged In!");
      console.log(email.value);
      console.log(password.value);
      email.reset(event);
      password.reset(event);
      setEmailErr("");
      setPasswordErr("");
      return true;
    }
    return false;
  }

  return (
    <div>
      <title>Login Account</title>
      <Navbar />
      <Header />
      <div className="container">
        <div className="content">
          <div className="content_rgt">
            <div className="login_sec">
              <h1>Log In</h1>
              <ul>
                <li>
                  <span>Email-ID</span>
                  <input
                    style={{ color: "blue" }}
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    value={email.value}
                    onChange={(e) => email.handleChange(e)}
                    required
                  />
                </li>
                <li>
                  <div style={{ color: "red" }}>{emailErr}</div>
                </li>

                <li>
                  <span>Password</span>
                  <input
                    style={{ color: "blue" }}
                    type="text"
                    name="password"
                    className="pw"
                    placeholder="Enter your password"
                    value={password.value}
                    onChange={(e) => password.handleChange(e)}
                    required
                  />
                </li>
                <li>
                  <div style={{ color: "red" }}>{passwordErr}</div>
                </li>

                <li>
                  <input
                    type="checkbox"
                    name="checkbox"
                    checked={checkbox.value}
                    onChange={(e) => checkbox.handleChange(e)}
                  />
                  Remember Me
                </li>

                <li>
                  <input
                    type="submit"
                    onClick={(e) => {
                      let i = handleSubmit(e);
                      console.log(i);
                      if (i) {
                        nextPath("/home");
                      }
                    }}
                    defaultValue="Log In"
                  />
                  <a href>Forgot Password</a>
                </li>
              </ul>
              <div className="addtnal_acnt">
                I do not have any account yet.
                <Link to={"/"}>Create My Account Now !</Link>
              </div>
            </div>
          </div>
          <div className="content_lft">
            <h1>Welcome from PPL!</h1>
            <p className="discrptn">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
            <img src="images/img_9.png" alt="" />
          </div>
        </div>
      </div>
      <div className="clear" />
      <Footer />
    </div>
  );
}

export default withRouter(Login);
