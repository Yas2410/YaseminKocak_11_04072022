import "../styles/Banner.css";
import logo from "../assets/logo.png";

function Banner() {
  return (
    <div className="kasa-banner">
      <img src={logo} alt="Logo Kasa" className="kasa-logo" />
      <ul className="kasa-menu">
        <li className="kasa-home">Accueil</li>
        <li>A propos</li>
      </ul>
    </div>
  );
}

export default Banner;
