import React, { useEffect, useState } from "react";
import axios from "axios";
import { object } from "prop-types";
import { Link } from "react-router-dom";

const PostsMain = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getposts = async () => {
      let response = await axios.get("http://localhost:5000/post");
      console.log(response.data);
      setPosts(response.data);
    };
    getposts();
  }, [props.postsRender]);

  return posts.map((post) => {
    return (
      <Link to={`/single/${post._id}`}>
        <div className="content_lft">
          <div className="contnt_2">
            <div className="div_a">
              <div className="div_title">{post.content}</div>
              <div className="btm_rgt">
                <div className="btm_arc">{post.category}</div>
              </div>
              <div className="div_top">
                <div className="div_top_lft">
                  <img src="images/img_6.png" />
                  {post.firstname + " " + post.lastname}
                </div>
                <div className="div_top_rgt">
                  <span className="span_date">02 Jan 2014</span>
                  <span className="span_time">11:15am</span>
                </div>
              </div>
              <div className="div_image">
                <img src={"http://localhost:5000/" + post.avatar} alt="pet" />
              </div>
              <div className="div_btm">
                <div className="btm_list">
                  <ul>
                    <li>
                      <a href="#">
                        <span className="btn_icon">
                          <img src="images/icon_001.png" alt="share" />
                        </span>
                        Share
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="btn_icon">
                          <img src="images/icon_002.png" alt="share" />
                        </span>
                        Flag
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="btn_icon">
                          <img src="images/icon_004.png" alt="share" />
                        </span>
                        4 Comments
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="btn_icon">
                          <img src="images/icon_003.png" alt="share" />
                        </span>
                        Likes
                      </a>
                    </li>
                    <div className="like_count" style={{ marginRight: "10px" }}>
                      <span className="lft_cnt" />
                      <span className="mid_cnt">10</span>
                      <span className="rit_cnt" />
                    </div>
                    <li>
                      <a href="#">
                        <span className="btn_icon">
                          <img src="images/icon_003.png" alt="share" />
                        </span>
                        Unlike
                      </a>
                    </li>
                    <div className="like_count">
                      <span className="lft_cnt" />
                      <span className="mid_cnt">4</span>
                      <span className="rit_cnt" />
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  });
};

export default PostsMain;
