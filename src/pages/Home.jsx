import { useFetch } from "../hook/useFetch.js";
import Banner from "../components/Banner";
import banner from "../assets/banner.png";
import HousingAll from "../components/HousingAll";
import "../styles/home.css";
import Loader from "../components/Loader.jsx";

function Home() {
  //Je fetche les données de mon fichier json
  const { data, loading } = useFetch("housing.json");

  return (
    //Boucle sur mon tableau de données par le biais
    //de la méthode MAP() pour afficher un ensemble
    //d'éléments

    //Attention a bien ajouter une clé unique
    //afin d'éviter une erreur dans la console
    //BUT : Apporter une identité stable aux éléments
    //Cela va aider REACT à identifier les éléments
    //qui ont changé, ont été supprimé ou modifiés
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
