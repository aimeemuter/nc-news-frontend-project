import NcLogo from "../assets/nc-logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/articles">
      <img
        src={NcLogo}
        className="logo northcoders header"
        alt="Northcoders logo"
      />
    </Link>
  );
};

export default Logo;
