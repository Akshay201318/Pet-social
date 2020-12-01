import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import { useDispatch } from "react-redux";
import "../form.css";
import { withRouter, Link, useHistory } from "react-router-dom";
import axios from "axios";
import { add_user } from "../action";

//This is a custom hook for creating form inputs

function useFormInputs(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    const isCheckbox = e.target.type === "checkbox";

    e.target.name === isCheckbox
      ? setValue(e.target.checked)
      : setValue(e.target.value);
  }

  function reset(e) {
    const isCheckbox = e.target.type === "checkbox";
    e.target.name === isCheckbox ? setValue(false) : setValue("");
  }

  return {
    value,
    handleChange,
    reset,
  };
}

const Register = (props) => {
  const dispatch = useDispatch();
  const history =useHistory();
  // for changing path on successfull Register
  const nextPath = (path) => {
    props.history.push(path);
  };
  if (localStorage.getItem("user") != null) {
    history.push("/home");
  }

  //creating all the form inputs and there handlers
  const username = useFormInputs("");
  const email = useFormInputs("");
  const password = useFormInputs("");
  const checkbox = useFormInputs(false);
  const firstName = useFormInputs("");
  const lastName = useFormInputs("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [checkboxErr, setCheckboxErr] = useState("");
  const [firstNameErr, setFirstNameErr] = useState("");
  const [lastNameErr, setLastNameErr] = useState("");
  const [usernameErr, setUsernameErr] = useState("");

  //Validating form inputs

  function validate() {
    let flag = true;
    // Validating the user name
    if (username.value === "") {
      setUsernameErr("This field should not be empty!");
      flag = false;
    } else if (
      !username.value.match(
        /^(?=[a-zA-Z0-9._]{6,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/
      )
    ) {
      setUsernameErr(
        "Username atleast 6 characters long and must contains only lowercase or uppercase latters!"
      );
      flag = false;
    } else {
      setUsernameErr("");
    }

    // Validating email address
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

    // Validating password
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

    //validating the checkbox
    if (checkbox.value === false) {
      setCheckboxErr("Please click on I agree to accept terms and conditions!");
      flag = false;
    } else {
      setCheckboxErr("");
    }

    // Validating first name

    if (firstName.value === "") {
      setFirstNameErr("This field should not empty!");
      flag = false;
    } else if (
      !firstName.value.match(
        /^(?=[a-zA-Z0-9._]{6,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/
      )
    ) {
      setFirstNameErr(
        "Firstname atleast 6 characters long and must contains only lowercase or uppercase latters!"
      );
      flag = false;
    } else {
      setFirstNameErr("");
    }

    // Validating last name

    if (lastName.value === "") {
      setLastNameErr("This field should not empty!");
      flag = false;
    } else if (
      !lastName.value.match(
        /^(?=[a-zA-Z0-9._]{6,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/
      )
    ) {
      setLastNameErr(
        "Username atleast 6 characters long and must contains only lowercase or uppercase latters!"
      );
      flag = false;
    } else {
      setLastNameErr("");
    }
    return flag;
  }

  // function for handling the submit action of register form

  async function handleSubmit(event) {
    event.preventDefault();
    const isValid = validate();
    console.log(isValid);
    if (isValid) {
      let user = {
        name: username.value,
        email: email.value,
        password: password.value,
        firstName: firstName.value,
        lastName: lastName.value,
        checkbox: checkbox.value,
      };
      console.log("after++)))))))))", user);
      let response = await axios.post("http://localhost:5000/register", {
        data: user,
      });
      console.log(response.data);
      dispatch(add_user(user));

      alert("Your account has been created Successfully!!");
      username.reset(event);
      email.reset(event);
      password.reset(event);
      firstName.reset(event);
      lastName.reset(event);
      checkbox.reset(event);
      setUsernameErr("");
      setEmailErr("");
      setPasswordErr("");
      setFirstNameErr("");
      setLastNameErr("");
      setCheckboxErr("");
      return true;
    }
    return false;
  }
  return (
    <div>
      <Navbar />
      <div>
        <title>Create An Account</title>

        <div>
          <div className="content">
            <div className="content_rgt">
              <div className="register_sec">
                <h1>Create An Account</h1>
                <ul>
                  <li>
                    <span>Username</span>
                    <input
                      style={{ color: "blue" }}
                      type="text"
                      name="username"
                      placeholder="Enter your username"
                      value={username.value}
                      onChange={(e) => username.handleChange(e)}
                      required
                    />
                  </li>
                  <li>
                    <div style={{ color: "red" }}>{usernameErr}</div>
                  </li>

                  <li>
                    <span>Password</span>
                    <input
                      style={{ color: "blue" }}
                      type="text"
                      className="pw"
                      name="password"
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
                    <span>Email</span>
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
                    <span>First Name</span>
                    <input
                      style={{ color: "blue" }}
                      type="text"
                      name="firstname"
                      placeholder="Enter your first name"
                      value={firstName.value}
                      onChange={(e) => firstName.handleChange(e)}
                      required
                    />
                  </li>
                  <li>
                    <div style={{ color: "red" }}>{firstNameErr}</div>
                  </li>

                  <li>
                    <span>Last Name</span>
                    <input
                      style={{ color: "blue" }}
                      type="text"
                      name="lastname"
                      placeholder="Enter your last name"
                      value={lastName.value}
                      onChange={(e) => lastName.handleChange(e)}
                      required
                    />
                  </li>
                  <li>
                    <div style={{ color: "red" }}>{lastNameErr}</div>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      name="checkbox"
                      checked={checkbox.value}
                      onChange={(e) => checkbox.handleChange(e)}
                      required
                    />
                    I agree to Term &amp; Conditions
                  </li>
                  <li>
                    <div style={{ color: "red" }}>{checkboxErr}</div>
                  </li>

                  <li>
                    <input
                      type="submit"
                      onClick={(e) => {
                        let i = validate();
                        handleSubmit(e);
                        console.log("i is equal to", i);
                        if (i) {
                          nextPath("/login");
                        }
                      }}
                    />
                  </li>
                </ul>
                <div className="addtnal_acnt">
                  I already have an account.
                  <Link to={"/login"}>Login My Account !</Link>
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
                hidden in the middle of text.{" "}
              </p>
              <img src="images/img_9.png" alt="" />{" "}
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export default withRouter(Register);
