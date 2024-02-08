import NcLogo from "../assets/nc-logo.svg";
import { Link } from "react-router-dom";
import Users from "../components/Users";

const Landing = () => {
  return (
    <>
      <header>
        <Link to="/about">
          <img
            src={NcLogo}
            className="logo northcoders landing"
            alt="Northcoders logo"
          />
        </Link>
        <h1 className="main-title">Northcoders News</h1>
      </header>
      <section className="users">
        <Users />
      </section>
      <p className="more-information">
        Click on the Northcoders logo to learn more about this project
      </p>
    </>
  );
};

export default Landing;
