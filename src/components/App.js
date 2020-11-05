import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Header from './Header';
import '../App.css';
import Container from './Container';
// import {Link} from 'react-router-dom';
import Login from './Login';




class App extends React.Component {

  render(){
  return (

    <Login/>
    // // <div>
    // //   <ul>
    // //       <li><Link to={'/login'}><h5 className="text-primary">Login</h5></Link></li>
    // //               <li> <h5>Or</h5> </li>
    // //               <li><Link to={'/register'}><h5>Sign up</h5></Link></li>
    // //   </ul>
    // //     <Navbar/>
    // //     <Header/>
    // //     <Container/>
    // //     <Footer />
    // </div>
  );
}
}

export default App;
