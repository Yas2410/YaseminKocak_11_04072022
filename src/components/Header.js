import "../styles/Header.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="kasa-header">
      <img src={logo} alt="Logo Kasa" className="kasa-logo" />
      <nav className="kasa-menu">
        <NavLink className="header-link" to="/">
          Accueil
        </NavLink>
        <NavLink className="header-link" to="/About">
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
