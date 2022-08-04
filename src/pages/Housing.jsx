import { useFetch } from "../hook/useFetch.js";
//import de USEPARAMS : Permettre de controler la navigation
//Ici, avec l'id des différentes locations (retourne une paire clé/valeur)
import { useParams } from "react-router-dom";
import Rating from "../components/Rating";
import Error from "../pages/Error";
import Slider from "../components/Slider";
import Loader from "../components/Loader";
import Dropdown from "../components/Dropdown";
import "../styles/housing.css";

function Housing() {
  //Je fetche les données de mon fichier json
  const { data, loading } = useFetch("housing.json");
  //let urlParams = useParams();
  //Ici, l'url propre à chaque location sera :
  //http://localhost:3000/housing= +ID DE LA LOCATION
  const { id } = useParams(`/housing=`);
  //Méthode find() : Faire matcher les ID
  const housingData = data.find((housing) => housing.id === id);

  return (
    //Import de mon composant Loader, le temps du chargement des données
    <div className="housing-mainPage">
      {loading ? (
        <div className="loader-center">
          <Loader />
        </div>
      ) : (
        //Une fois le chargement OK, j'affiche mes données
        <div className="housing-dataDetails">
          {housingData ? (
            <div className="housing-section">
              <Slider pictures={housingData.pictures} />
              <div className="housing-infos">
                <div className="housing-area">
                  <h1 className="housing-title">{housingData.title}</h1>
                  <h2 className="housing-localization">
                    {housingData.location}
                  </h2>
                  <ul className="housing-tag">
                    {housingData.tags.map((tag) => {
                      return (
                        <li className="tag-elt" key={tag}>
                          {tag}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="housing-host">
                  <div className="host-profile">
                    <p className="host-name">{housingData.host.name}</p>
                    <img
                      className="host-img"
                      src={housingData.host.picture}
                      alt={"Photo de" + housingData.host.name}
                    />
                  </div>
                  <Rating className="rating" rating={housingData.rating} />
                </div>
              </div>
              <div className="housing-dropdown">
                <Dropdown
                  title="Description"
                  content={housingData.description}
                />
                <Dropdown
                  title="Équipements"
                  content={housingData.equipments}
                />
              </div>
            </div>
          ) : (
            //Sinon, si les données ne sont pas correctes (erreur dans url par exemple)
            //j'affiche alors ma page d'erreur 404
            <Error />
          )}
        </div>
      )}
    </div>
  );
}

export default Housing;
