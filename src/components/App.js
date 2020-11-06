import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Header from './Header';
import '../App.css';
import Container from './Container';
import {Route} from 'react-router-dom';
import Register from './Register';
import Login from './Login';




class App extends React.Component {

  render(){
  return (

      <div>
         <Route exact path='/' component={Register}/>
         <Route exact path='/login' component={Login}/>
         <Route exact path='/home' component={Container}/>
      </div>
  );
}
}

export default App;
