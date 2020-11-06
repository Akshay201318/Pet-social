import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Header from './Header';
import {Link} from 'react-router-dom';
import '../form.css'

let initialState = {
  password: "",
  email: "",
  checkbox: false,
  emailErr: "",
  passwordErr: ""

}
class login extends React.Component {

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
     if(this.state.password === ""){
      this.setState({
        passwordErr: "Password must not be empty!"
      });
      fla=false;
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
      console.log(this.state);
    }
    

  }

    render(){
    return (
        <div>
        <title>Login Account</title>
        <Navbar/>
        <Header/>
        <div className="container">
          <div className="content">
            <div className="content_rgt">
              <div className="login_sec">
                <h1>Log In</h1>
                <ul>
                  <li><span>Email-ID</span><input style={{ color: "blue" }} type="text" name="email" placeholder="Enter your email" value={this.state.email} onChange={this.handleChange} required/></li>
                  <li><div style={{ color: "red" }}>{this.state.emailErr}</div></li>
                  <li><span>Password</span><input style={{ color: "blue" }} type="text" name ="password" className="pw" placeholder="Enter your password" value={this.state.password} onChange={this.handleChange} required /></li>
                  <li><div style={{ color: "red" }}>{this.state.passwordErr}</div></li>
                  <li><input type="checkbox" name="checkbox" checked={this.state.checkbox} onChange={this.handleChange}/>Remember Me</li>
                  <li><input type="submit" onClick={this.handleSubmit} defaultValue="Log In" /><a href>Forgot Password</a></li>
                </ul>
                <div className="addtnal_acnt">I do not have any account yet.<Link to={'/'}>Create My Account Now !</Link></div>
              </div>
            </div>
            <div className="content_lft">
              <h1>Welcome from PPL!</h1>
              <p className="discrptn">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
              <img src="images/img_9.png" alt="" /> 
            </div>
          </div>
        </div>
        <div className="clear" />
        <Footer />
      </div>
    );
  }
  }
  
  export default login;
  