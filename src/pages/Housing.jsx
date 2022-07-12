import { useParams, Navigate } from "react-router-dom";
import "../styles/housing.css";
import { data } from "../data/data";
import Rating from "../components/Rating";

function Housing() {
  let urlParams = useParams();

  const locationData = data.find((data) => data.id === urlParams.id);

  if (locationData == null) {
    return <Navigate to="/error" />;
  }

  return (
    <div className="location-main">
      <div className="location-info">
        <h1 className="title">{locationData.title}</h1>
        <h2 className="location">{locationData.location}</h2>
        <ul className="tag">
          {locationData.tags.map((tag) => {
            return (
              <li key={tag} className="tag-elt">
                {tag}
              </li>
            );
          })}
        </ul>

        <div className="host">
          <h3 className="host-name">
            {locationData.host.name.split(" ")[0]}
            <br />
            {locationData.host.name.split(" ")[1]}
          </h3>
          <div>
            <img
              src={locationData.host.picture}
              alt="host profile"
              className="host-img"
            />
          </div>
        </div>
        <div>
          <Rating rating={locationData.rating} />
        </div>
      </div>
    </div>
  );
}

export default Housing;
