import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import bannerAbout from "../assets/banner-about.png";
import { aboutDataContent } from "../data/aboutData";
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

/*
Plutot que de mettre 4 "dropdown" avec le contenu de chacun d'eux directement dans le code,
j'importe mes données avec un id dans un fichier js (ici,aboutData.js ) que je map ensuite
dans 1 seul "dropdown" principal. 
De ce fait, en cas d'ajout/de suppression/de changement dans les données, cela se fera 
automatiquement dans mon fichier About.jsx
*/

export default About;
