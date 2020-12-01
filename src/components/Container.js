import React, { useEffect, useState } from "react";
import ContentRight from "./ContentRight";
import Posts from "./Posts";
import Header from "./Header";
import PostsMain from "./postsMain";
import PostForm from "./postForm";
import { storeUser } from "../action";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
//import mainPosts from "./mainPosts";

const Container = () => {
  const [postForm, setPostForm] = useState(0);
  const [postsRender, setPostsRender] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  if (localStorage.getItem("user") === null) {
    console.log(localStorage.getItem("user"));
    history.push("/login");
  } else {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    dispatch(storeUser(user));
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">
          <ContentRight user={postForm} change={setPostForm} />
          <Posts />

          <PostsMain postsRender={postsRender} />
        </div>
        <div className="clear" />
      </div>
      {postForm === 1 ? (
        <PostForm
          user={postForm}
          change={setPostForm}
          postsRender={postsRender}
          setPostsRender={setPostsRender}
        />
      ) : null}
    </div>
  );
};

export default Container;
