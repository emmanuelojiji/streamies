import "./global.scss";
import "./Home.scss";
import spotify_logo from "../media/spotify-logo.png";
import Carousel from "../Components/Carousel";
import { Link } from "react-router-dom";
import Logo from "../Components/Logo";

const Home = () => {
  return (
    <main>
      <Logo />

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
