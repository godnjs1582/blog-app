import Footer from "components/Footer";
import Header from "components/Header";
import PostLists from "components/PostLists";

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
