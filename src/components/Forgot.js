import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";

function Forgot() {
  return (
    <div>
      <title>Forgot Password</title>
      <div className="popup_sec" id="pop_forgt">
        <div className="clos_btn">
          <img src="images/clos.png" alt="" id="clos_pop" />
        </div>
        <div className="pop_hdr">
          A mail has been send to your e-mail Id for Reset Password Link
        </div>
        <div className="man_contnt">
          <span>Please Check Your Mail Box!</span>
          <input type="submit" defaultValue="Ok" />
        </div>
      </div>
      <Navbar />
      <Header />
      <div className="container">
        <div className="content">
          <div className="content_rgt">
            <div className="register_sec">
              <h1>Forgot Password</h1>
              <ul>
                <li>
                  <span>Enter E-mail ID</span>
                  <input type="text" placeholder="User@gmail.com" />
                </li>
                <li>
                  <input type="submit" defaultValue="Submit" />
                </li>
              </ul>
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
      <Footer />
    </div>
  );
}

export default Forgot;
