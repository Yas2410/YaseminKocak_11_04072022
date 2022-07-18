//J'importe de nouveau mon composant BANNER
//puisque son style est identique à la bannière de la page HOME
import Banner from "../components/Banner";
//Seule la photo va changer
import bannerAbout from "../assets/banner-about.png";
//Style de la page A PROPOS
import "../styles/about.css";

function About() {
  return (
    <div>
      <Banner img={bannerAbout} />
    </div>
  );
}

export default About;
