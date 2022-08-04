import { Link } from "react-router-dom";
import logoWhite from "../assets/logo-white.png";
import "../styles/footer.css";

function Footer() {
  //méthode getFullYear() : renvoie l'année de la date renseignée d'après l'heure locale
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
