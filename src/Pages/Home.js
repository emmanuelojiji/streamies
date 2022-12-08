import "./global.scss";
import "./Home.scss";
import spotify_logo from "../media/spotify-logo.png";
import logo from "../media/logo.svg";
import Carousel from "../Components/Carousel";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <img src={logo} className="logo" />

      <div className="main-content">
        <div className="main-content-left">
          <h1>Host your own award show using your Spotify account.</h1>
          <Link to="/results" className="button">
            BEGIN SHOW
          </Link>
        </div>

        <Carousel />
      </div>

      <footer>
        <img src={spotify_logo} className="spotify-logo" />
      </footer>
    </main>
  );
};

export default Home;
