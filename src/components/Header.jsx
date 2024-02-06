import "../styles/Header.css";
import ActiveUser from "./ActiveUser";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <h2 className="header-title">Northcoders News</h2>
      <ActiveUser />
    </header>
  );
};

export default Header;
