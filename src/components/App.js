import React from 'react';
import '../App.css';
import Container from './Container';
import {Route} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import axios from 'axios';

const api= axios.create({
  baseURL:`https://dog.ceo/api/breeds/image/random`
});




class App extends React.Component {


  constructor(props){
    super(props);
    api.get('/').then(res =>{
      console.log("hello everyone");
    })
  }

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
