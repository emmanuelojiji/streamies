import "./Logo.scss";
import logo from "../media/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} className="logo" />
    </Link>
  );
};

export default Logo;
