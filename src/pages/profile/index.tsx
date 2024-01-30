import React from 'react'
import Profile from "../../components/Profile";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PostLists from "../../components/PostLists";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <Profile />
      <PostLists hasNavigation={false} />
      <Footer />
    </>
  );
};

export default ProfilePage;