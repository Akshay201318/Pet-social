import React from "react";

const ContentRight = (props) => {
  //function for removing or adding form at the screen
  const handlePost = (e) => {
    console.log("this the form");
    if (props.user) {
      props.change(0);
    } else {
      props.change(1);
    }
  };
  return (
    <div>
      <div className="content_rgt">
        <div className="rght_btn">
          {" "}
          <span className="rght_btn_icon">
            <img src="images/btn_iconb.png" alt="up" />
          </span>{" "}
          <span className="btn_sep">
            <img src="images/btn_sep.png" alt="sep" />
          </span>{" "}
          <a
            className="text-light"
            onClick={(e) => {
              handlePost(e);
            }}
          >
            Upload Post
          </a>{" "}
        </div>
        <div className="rght_btn">
          {" "}
          <span className="rght_btn_icon">
            <img src="images/btn_icona.png" alt="up" />
          </span>{" "}
          <span className="btn_sep">
            <img src="images/btn_sep.png" alt="sep" />
          </span>{" "}
          <a href="#">Invite Friends</a>{" "}
        </div>
        <div className="rght_cate">
          <div className="rght_cate_hd container-fluid" id="rght_cat_bg">
            Categories
          </div>
          <div className="rght_list">
            <ul>
              <li>
                <a href="#">
                  <span className="list_icon">
                    <img src="images/icon_01.png" alt="up" />
                  </span>{" "}
                  CATS
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="list_icon">
                    <img src="images/icon_02.png" alt="up" />
                  </span>{" "}
                  Dogs
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="list_icon">
                    <img src="images/icon_03.png" alt="up" />
                  </span>{" "}
                  Birds
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="list_icon">
                    <img src="images/icon_04.png" alt="up" />
                  </span>{" "}
                  Rabbit
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="list_icon">
                    <img src="images/icon_05.png" alt="up" />
                  </span>{" "}
                  Others
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="rght_cate">
          <div className="rght_cate_hd" id="opn_cat_bg">
            Featured
          </div>
          <div className="sub_dwn">
            <div className="feat_sec">
              <div className="feat_sec_img">
                <img src="images/feat_img1.png" alt="image" />
              </div>
              <div className="feat_txt">Lorem Ipusum Text</div>
              <div className="btm_rgt">
                <div className="btm_arc">Cats</div>
              </div>
            </div>
            <div className="feat_sec">
              <div className="feat_sec_img">
                <img src="images/feat_img2.png" alt="image" />
              </div>
              <div className="feat_txt">Lorem Ipusum Text</div>
              <div className="btm_rgt">
                <div className="btm_arc">Dogs</div>
              </div>
            </div>
            <div className="feat_sec">
              <div className="feat_sec_img">
                <img src="images/feat_img3.png" alt="image" />
              </div>
              <div className="feat_txt">Lorem Ipusum Text</div>
              <div className="btm_rgt">
                <div className="btm_arc">Rabbits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentRight;
