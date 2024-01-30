import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PostLists from "../../components/PostLists";

const PostPage = () => {
  return (
    <>
      <Header />
      <PostLists hasNavigation={false} />
      <Footer />
    </>
  );
};

export default PostPage;
