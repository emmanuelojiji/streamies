import "./Home.scss";
import logo from "../media/logo.svg";
import billboard_img from "../media/billboard-img.png";

const Home = () => {
  return (
    <main>
      <img src={logo} className="logo" />

      <div className="main-content">
        <div className="main-content-left">
          <h1>
            Log in with your Spotify account <br /> and get ready to give your
            <br />
            favourite artists their flowers.
          </h1>
          <a>Begin Show</a>
        </div>

        <img src={billboard_img} className="billboard_img" />
      </div>
    </main>
  );
};

export default Home;
