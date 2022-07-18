//J'importe mon fichier avec ma méthode fetch
//Import de ma méthode useEffect contenant le fetch de mes données
import { useFetch } from "../utils/useFetch.js";
//import de USEPARAMS : Permettre de controler la navigation
//Ici, avec l'id des différentes locations
import { useParams } from "react-router-dom";
//Import de mon composant Rating pour la notation de la location
//et de mon composant Error en cas d'id incorrect : page non trouvée
import Rating from "../components/Rating";
import Error from "../pages/Error";
import Slider from "../components/Slider";
//Style des pages de locations détaillées
import "../styles/housing.css";

function Housing() {
  //Je fetche les données de mon fichier json
  const { data } = useFetch("housing.json");
  //let urlParams = useParams();
  //Ici, l'url propre à chaque location sera :
  //http://localhost:3000/housing= +ID DE LA LOCATION
  const { id } = useParams(`/housing=`);
  //Méthode find() : Faire matcher les ID
  const housingData = data.find((housing) => housing.id === id);

  return (
    <div className="housing-mainPage">
      <div className="housing-dataDetails">
        {housingData ? (
          <div className="housing-section">
            <Slider />
            <div className="housing-infos">
              <div className="housing-area">
                <h1 className="housing-title">{housingData.title}</h1>
                <h2 className="housing-localization">{housingData.location}</h2>
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
          </div>
        ) : (
          <Error />
        )}
      </div>
    </div>
  );
}

/*
  if (housingData === null) {
    return <Navigate to="/error" />;
  }
  */

export default Housing;
