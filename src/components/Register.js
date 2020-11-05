import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Header from './Header';
import "../form.css"
let initialState = {
  username: "",
  password: "",
  email: "",
  firstname: "",
  lastname: "",
  checkbox: false,
  userNameErr: "",
  emailErr: "",
  passwordErr: "",
  firstnameErr: "",
  lastnameErr: "",
  checkboxErr: ""

}
class register extends React.Component {

  constructor(props) {
    super(props);
    this.state = initialState;
      
  }

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";

    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  }

  validate = () => {

    let fla = true;
    console.log("Hello! validate");
    if (this.state.username === "") {
      this.setState({
        userNameErr: "This field should not be empty!"
      });
      fla = false;
    }
    else if (!this.state.username.match(/^(?=[a-zA-Z0-9._]{6,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/)) {
      this.setState({
        userNameErr: "Username atleast 6 characters long and must contains only lowercase or uppercase latters!"
      });
      fla = false;
    }
    else{
      this.setState({
        userNameErr: ""
      });
    }
    if (this.state.email === "") {
      this.setState({
        emailErr: "Email should not be empty!"
      });
      fla = false;
    }
    else if (this.state.email.length < 8) {
      this.setState({
        emailErr: "Please enter a valid email!"
      });
      fla = false;
    }
    else if (!(this.state.email.includes('@') && this.state.email.includes('.com'))) {
      this.setState({
        emailErr: "Please include an @ or .com in the email!"
      });
      fla = false;
    }
    else{
      this.setState({
        emailErr: ""
      });
    }

    if (this.state.checkbox === false) {
      this.setState({
        checkboxErr: "Please click on I agree to accept terms and conditions!"
      });
      fla = false;
    }
    else{
      this.setState({
        checkboxErr: ""
      });
    }


    if (this.state.firstname === "") {
      this.setState({
        firstnameErr: "This field should not empty!"
      });
      fla = false;
    }
    else if (!this.state.firstname.match(/^(?=[a-zA-Z0-9._]{6,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/)) {
      this.setState({
        firstnameErr: "Firstname atleast 6 characters long and must contains only lowercase or uppercase latters!"
      });
      fla = false;
    }
    else{
      this.setState({
        firstnameErr: ""
      });
    }

    if (this.state.lastname === "") {
      this.setState({
        lastnameErr: "This field should not empty!"
      });
      fla = false;
    }
    else if (!this.state.lastname.match(/^(?=[a-zA-Z0-9._]{6,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/)) {
      this.setState({
        lastnameErr: "Username atleast 6 characters long and must contains only lowercase or uppercase latters!"
      });
      fla = false;
    }
    else{
      this.setState({
        lastnameErr: ""
      });
    }
     if(this.state.password === ""){
      this.setState({
        passwordErr: "Password must not be empty!"
      });
     }
     else if(!this.state.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
      this.setState({
        passwordErr: "Password must contains minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!"
      });
      fla=false;
    }
    else{
      this.setState({
        passwordErr: ""
      });
    }
    return fla;
  }

  handleSubmit = event => {
    console.log("Hello! submit");
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState(initialState);
      console.log("after++)))))))))", this.state);
    }
    

  }

  render() {
    return (
      <div>
        <title>Create An Account</title>
        <Navbar />
        <Header />
        <div className="container">
          <div className="content">
            <div className="content_rgt">
              <div className="register_sec">
                <h1>Create An Account</h1>
                <ul>
                  <li><span>Username</span><input style={{ color: "blue" }} type="text" name="username" placeholder="Enter your username" value={this.state.username} onChange={this.handleChange} required /></li>
                  <li><div style={{ color: "red" }}>{this.state.userNameErr}</div></li>
                  <li><span>Password</span><input style={{ color: "blue" }} type="text" className="pw" name="password" placeholder="Enter your password" value={this.state.password} onChange={this.handleChange} required /></li>
                  <li><div style={{ color: "red" }}>{this.state.passwordErr}</div></li>
                  <li><span>Email</span><input style={{ color: "blue" }} type="text" name="email" placeholder="Enter your email" value={this.state.email} onChange={this.handleChange} required /></li>
                  <li><div style={{ color: "red" }}>{this.state.emailErr}</div></li>
                  <li><span>First Name</span><input style={{ color: "blue" }} type="text" name="firstname" placeholder="Enter your first name" value={this.state.firstname} onChange={this.handleChange} required /></li>
                  <li><div style={{ color: "red" }}>{this.state.firstnameErr}</div></li>
                  <li><span>Last Name</span><input style={{ color: "blue" }} type="text" name="lastname" placeholder="Enter your last name" value={this.state.lastname} onChange={this.handleChange} required /></li>
                  <li><div style={{ color: "red" }}>{this.state.lastnameErr}</div></li>
                  <li><input type="checkbox" name="checkbox" checked={this.state.checkbox} onChange={this.handleChange} required />I agree to Term &amp; Conditions</li>
                  <li><div style={{ color: "red" }}>{this.state.checkboxErr}</div></li>
                  <li><input type="submit" onClick={this.handleSubmit} /></li>
                </ul>
                <div className="addtnal_acnt">I already have an account.<a href>Login My Account !</a></div>
              </div>
            </div>
            <div className="content_lft">
              <h1>Welcome from PPL!</h1>
              <p className="discrptn">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
              <img src="images/img_9.png" alt="" /> </div>
          </div>
        </div>
        <div className="clear" />
        <Footer />
      </div>
    );
  }
}

export default register;
