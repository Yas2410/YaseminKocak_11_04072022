//J'importe mon fichier avec ma méthode fetch
//pour l'affichage des datas
import { useFetch } from "../hook/useFetch.js";
//import de mon code concernant la bannière +
//import de l'image
import Banner from "../components/Banner";
import banner from "../assets/banner.png";
//Autres imports de fichiers présents à l'affichage
import HousingAll from "../components/HousingAll";

//Style de ma page HOME
import "../styles/home.css";
import Loader from "../components/Loader.jsx";

function Home() {
  //Appel fetch pour l'affichage de mes données
  //(Méthode USEFETCH : Voir fichier correspondant)
  const { data, loading } = useFetch("housing.json");

  return (
    //Mon Header avec la bannière
    //Section affichant l'ensemble des locations
    //Boucle sur mon tableau de données par le biais
    //de la méthode MAP() pour afficher un ensemble
    //d'éléments

    //Attention a bien ajouter une clé unique
    //afin d'éviter une erreur dans la console
    //BUT : Apporter une identité stable aux éléments
    //Cela va aider REACT à identifier les éléments
    //qui ont changé, ont été supprimé ou modifié
    <div className="main-section">
      <div className="main">
        <Banner img={banner} txt="Chez vous, partout et ailleurs" />
        {loading ? (
          <div className="loader-center">
            <Loader />
          </div>
        ) : (
          <div className="housingAll-section">
            {data.map((housing) => (
              <HousingAll
                id={housing.id}
                cover={housing.cover}
                title={housing.title}
                key={housing.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
