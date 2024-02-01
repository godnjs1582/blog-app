import React from "react";
import { Link } from "react-router-dom";

const PostDetail = () => {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">
            lorem ipsum sldkfjlsdkjflskdjflskdfsdkfjsldkfjsld lksjflskd{" "}
          </div>
          <div className="post__profile-box">
            <div className="post__profile" />
            <div className="post__author-name">패스트캠퍼스</div>
            <div className="post__date">2023.07.23 토요일</div>
          </div>
          <div className="post__utils-box">
            <div className="post__delete">삭제</div>
            <div className="post__edit">
              <Link to="/post/edit/1">수정</Link>
            </div>
          </div>
          <div className="post__text">
            fj;sdf;sldkf;sldkf;slkf;sldkf;sldkf;skf;s
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
