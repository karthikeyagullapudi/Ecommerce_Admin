import SideBar from "../Components/SideBar";
import Header from "../Components/Common/Header";

const Home = () => {
  return (
    <>
      <div className="home-main-container">
        <Header />
        <div className="home-layout-container">
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default Home;
