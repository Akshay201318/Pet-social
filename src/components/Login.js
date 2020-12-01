import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { storeUser } from "../action";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import "../form.css";

const Login = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(localStorage.getItem("user"));
  if (localStorage.getItem("user") != null) {
    history.push("/home");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckBox] = useState(false);
  const [loginErr, setLoginErr] = useState("");

  //submit function for submitting login credentials
  const handleSubmit = async (event) => {
    event.preventDefault();
    let user = {
      email,
      password,
      checkbox,
    };
    console.log(user);
    let response = await axios.post("http://localhost:5000/login", {
      data: user,
    });
    console.log(response.data);
    const data = JSON.stringify(response.data);
    const userData = JSON.parse(data);
    console.log("request:", userData);
    if (userData) {
      dispatch(storeUser(userData));
      localStorage.setItem("user", JSON.stringify(userData));
      setEmail("");
      setPassword("");
      setLoginErr("");
      setCheckBox(false);
      console.log("this is users data!!!!", userData);
      alert("Successfully!! logged In!");
      history.push("/home");
    } else {
      setLoginErr("email or password is incorrect!");
      alert("Login failed! login or password is not correct");
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <title>Login Account</title>
        <div>
          <div className="content">
            <div className="content_rgt">
              <div className="login_sec">
                <h1>Log In</h1>
                <ul>
                  <li>
                    <div style={{ color: "red" }}>{loginErr}</div>
                  </li>
                  <li>
                    <span>Email-ID</span>
                    <input
                      style={{ color: "blue" }}
                      type="text"
                      name="email"
                      placeholder="Enter your email"
                      value={email.value}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
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
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      name="checkbox"
                      checked={checkbox.value}
                      onChange={(e) => setCheckBox((prevState) => !prevState)}
                    />
                    Remember Me
                  </li>

                  <li>
                    <input
                      type="submit"
                      onClick={(e) => handleSubmit(e)}
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
      </div>
    </div>
  );
};

export default Login;
