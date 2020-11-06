import React from 'react';
import ContentRight from './ContentRight';
import Posts from './Posts';
import CatImgContainer from './CatImgContainer';
import DogImgContainer from './DogImgContainer';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

class container extends React.Component{
    render(){
        return (
            <div>
            <Navbar />
            <Header />
            <div className="container">
            <div className="content">
              <ContentRight/>
              <Posts/>
              <CatImgContainer/>
              <DogImgContainer/> 
           </div>
              <div className="clear" />
              </div>
              <Footer />
            </div>
        )
    }
}

export default container;