import "./Home.scss";
import logo from "../media/logo.svg";
import lines from "../media/lines.svg";
import Carousel from "../Components/Carousel";

const Home = () => {
  return (
    <main>
      <img src={logo} className="logo" />

      <div className="main-content">
        <div className="main-content-left">
          <h1>
            Host your own award show using your Spotify account.
          </h1>
          <a>BEGIN SHOW</a>
        </div>

       <Carousel/>
      </div>

    </main>
  );
};

export default Home;
