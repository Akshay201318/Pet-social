import React from "react";

function CatImgContainer() {
  return (
    <div className="content_lft">
      <div className="contnt_2">
        <div className="div_a">
          <div className="div_title">
            User Interface PSD Source files Web Designing for web
          </div>
          <div className="btm_rgt">
            <div className="btm_arc">Cats</div>
          </div>
          <div className="div_top">
            <div className="div_top_lft">
              <img src="images/img_6.png" />
              Steave Waugh
            </div>
            <div className="div_top_rgt">
              <span className="span_date">02 Jan 2014</span>
              <span className="span_time">11:15am</span>
            </div>
          </div>
          <div className="div_image">
            <img src="images/lft_img.png" alt="pet" />
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
  );
}

export default CatImgContainer;
