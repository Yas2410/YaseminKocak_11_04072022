//Import de LINK qui va permettre la navigation entre
//mes pages

//Ici NAVLINK : Pour mettre en surbrillance le lien actif

import { Link, NavLink } from "react-router-dom";
//Import du logo
import logo from "../assets/logo.png";
//Style header
import "../styles/header.css";

function Header() {
  return (
    <header className="kasa-header">
      <Link to="/">
        <img src={logo} alt="Logo Kasa" className="kasa-logo" />
      </Link>
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
