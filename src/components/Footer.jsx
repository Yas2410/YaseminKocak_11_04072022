import React from "react";
import logoWhite from "../assets/logo-white.png";
import "../styles/footer.css";

function Footer() {
  //méthode getFullYear() : renvoie l'année de la date renseignée d'après l'heure locale
  //"&copy" = Code du symbole copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <img src={logoWhite} alt="Logo Kasa" className="logo-white" />
      <p className="footer-txt">
        &copy;
        {currentYear} Kasa. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
