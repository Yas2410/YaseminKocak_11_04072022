//J'importe mon fichier avec ma méthode fetch
import { useFetch } from "../utils/useFetch.js";
import { useParams } from "react-router-dom";
import "../styles/housing.css";
import Rating from "../components/Rating";
import Error from "../pages/Error";

function Housing() {
  const { data } = useFetch("housing.json");
  //let urlParams = useParams();
  const { id } = useParams(`/housing=`);
  const locationData = data.find((loc) => loc.id === id);

  /*
  if (locationData == null) {
    return <Navigate to="/error" />;
  }
  */
  return (
    <div className="location-mainPage">
      <div className="data-section">
        {locationData ? (
          <div className="location-section">
            <div className="location-infos">
              <h1 className="title">{locationData.title}</h1>
              <h2 className="location">{locationData.location}</h2>
              <ul className="tag">
                {locationData.tags.map((tag) => {
                  return (
                    <li className="tag-elt" key={tag}>
                      {tag}
                    </li>
                  );
                })}
              </ul>
              <div className="host">
                <div className="host-infos">
                  <p className="host-name">{locationData.host.name}</p>
                  <img
                    className="host-img"
                    src={locationData.host.picture}
                    alt={"Photo de" + locationData.host.name}
                  />
                </div>
                <Rating className="rating" rating={locationData.rating} />
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

export default Housing;
