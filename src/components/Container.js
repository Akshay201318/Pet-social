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

function Container() {
  const [postForm, setPostForm] = useState(0);
  return (
    <div>
      <Navbar />
      <Header />

      <div className="container">
        <div className="content">
          <ContentRight user={postForm} change={setPostForm} />
          <Posts />

          <CatImgContainer />
          <DogImgContainer />
        </div>
        <div className="clear" />
      </div>
      {postForm ? <PostForm user={postForm} change={setPostForm} /> : null}

      <Footer />
    </div>
  );
}

export default Container;
