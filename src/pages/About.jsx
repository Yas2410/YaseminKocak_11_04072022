//J'importe de nouveau mon composant BANNER
//puisque son style est identique à la bannière de la page HOME
import Banner from "../components/Banner";
//Et le composant dropdown
import Dropdown from "../components/Dropdown";
//Seule la photo va changer
import bannerAbout from "../assets/banner-about.png";
//import de mes données (content) fichier aboutData;js
import { aboutDataContent } from "../data/aboutData";
//Style de la page A PROPOS
import "../styles/about.css";

function About() {
  return (
    <div className="main-section">
      <div className="about-section">
        <Banner img={bannerAbout} />
        <div className="dropdown-section">
          {aboutDataContent.map((data) => (
            <Dropdown key={data.id} title={data.title} content={data.content} />
          ))}
        </div>
      </div>
    </div>
  );
}
//Plutot que de mettre 4 dropdown avec le contenu directement dans le code,
//j'importe mes données avec un id dans un fichier js que je map ensuite
//dans 1 dropdown principal. De ce fait, en cas d'ajout/de suppression/de
//chamgement dans les données, cela se fera automatiquement dans mon fichier About.jsx

export default About;
