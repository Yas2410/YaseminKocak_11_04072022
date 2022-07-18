//Import de LINK qui va permettre la navigation entre
//mes pages
import { Link } from "react-router-dom";
//Import du logo
import logoWhite from "../assets/logo-white.png";
//Style footer
import "../styles/footer.css";

function Footer() {
  //méthode getFullYear() : renvoie l'année de la date renseignée d'après l'heure locale
  //"&copy" = Code du symbole copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Link to="/">
        <img src={logoWhite} alt="Logo Kasa" className="logo-white" />
      </Link>
      <p className="footer-txt">
        <span className="copyright">&copy;</span>
        {currentYear} Kasa. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
