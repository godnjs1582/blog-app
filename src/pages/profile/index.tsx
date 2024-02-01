
import Footer from 'components/Footer';
import Header from 'components/Header';
import PostLists from 'components/PostLists';
import Profile from 'components/Profile';


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