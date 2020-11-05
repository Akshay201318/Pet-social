import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Header from './Header';
import Container from './Container';
class singlePost extends React.Component {

  render(){
  return (
    <div>
        <meta charSet="utf-8" />
        <title>Singal Post</title>
        <Navbar/>
        <Header/>
        <Container/>
        <Footer />
      </div>

  );
}
}

export default singlePost;
