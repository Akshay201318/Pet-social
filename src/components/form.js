
import React from 'react';
import '../form.css';
class form extends React.Component {

  state={
    username: "",
    password:"",
    email: "",
    // firstname: "",
    // lastname: "",
    userNameErr: "",
    emailErr: "",
    passwordErr: "",
    // firstnameErr:"",
    // lastnameErr:""
  }

  handleChange = event =>{
    console.log("hello!");
    //const isCheckbox= event.target.type === "checkbox";

    this.setState({
      [event.target.name] : event.target.value
      
    });
  }

  validate = () =>{
    console.log("Hello!")
       if(this.state.username.length < 6){
        this.setState({
         userNameErr :"Please enter"
            
          });
         return false;
       }

       if(this.state.email.length < 8){
        this.state.emailErr= "Please enter email!";
        return false;
       }
       if(!this.state.email.includes('@')){
        this.emailErr= "Invali email!";
        return false;
       }
       return true;
  }

  handleSubmit = event =>{
      console.log(this.state);
    console.log("Hello!");
    event.preventDefault();
    const isValid= this.validate();
    if(isValid){
      console.log(this.state);
    }
    
  }

    render(){
    return (

        <div>
        <h1>SignUp</h1>
        <form name="form" id="form" action="signIn.html" method="post" onSubmit={this.handleSubmit}>
          <label className="input" htmlFor="username">Username</label>
          <input className="input" type="text" name="username" id="username" placeholder="Enter Username" value={this.state.username} onChange={this.handleChange} required />
          <span style={{color:"red"}}>{this.state.userNameErr}</span>
          <label className="input" htmlFor="email">Email</label>
          <input className="input" type="email" name="email" id="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange} required />
          <span style={{color:"red"}}>{this.state.emailErr}</span>
          <label className="input" htmlFor="password">Password</label>
          <input className="input" type="password" name="password" id="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange} required/>
          <span style={{color:"red"}}>{this.state.passwordErr}</span>
          <label className="input" htmlFor="confirm-password">Confirm Password</label>
          <input className="input" type="password" name="confirm-password" id="Cpassword" placeholder="Confirm Password" value={this.state.confirm} onChange={this.handleChange} required />
          <button type="submit" id="SignUp" onClick={this.handleSubmit}>SignUp</button>
        </form>
      </div>
        
    );
  }
  }
  
  export default form;
  
