import React from 'react';
import ContentRight from './ContentRight';
import Posts from './Posts';
import CatImgContainer from './CatImgContainer';
import DogImgContainer from './DogImgContainer';

class container extends React.Component{
    render(){
        return (
            <div className="container">
          <div className="content">
              <ContentRight/>
              <Posts/>
              <CatImgContainer/>
              <DogImgContainer/> 
          </div>
          <div className="clear" />
        </div>
        )
    }
}

export default container;