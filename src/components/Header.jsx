import "../styles/Header.css";
import ActiveUser from "./ActiveUser";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <p className="header-title">Northcoders News</p>
      <ActiveUser />
    </header>
  );
};

export default Header;
