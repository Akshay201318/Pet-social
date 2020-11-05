import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Header from './Header';
import Container from './Container';

class timeline extends React.Component {

  render(){
  return (
    <div>
         <Navbar/>
         <Header/>
         <Container/>
        <Footer />
      </div>

  );
}
}

export default timeline;
