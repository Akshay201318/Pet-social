import React, { useState } from "react";
import ContentRight from "./ContentRight";
import Posts from "./Posts";
import CatImgContainer from "./CatImgContainer";
import DogImgContainer from "./DogImgContainer";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import PostForm from "./postForm";
//import mainPosts from "./mainPosts";

const Container = () => {
  const [postForm, setPostForm] = useState(1);
  return (
    <div>
      <div className="container">
        <div className="content">
          <ContentRight user={postForm} change={setPostForm} />
          <Posts />

          <CatImgContainer />
          <DogImgContainer />
        </div>
        <div className="clear" />
      </div>
      {postForm === 0 ? (
        <PostForm user={postForm} change={setPostForm} />
      ) : null}
    </div>
  );
};

export default Container;
