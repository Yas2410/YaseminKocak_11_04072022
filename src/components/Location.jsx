import { Link } from "react-router-dom";
import "../styles/location.css";

function Location({ id, cover, title }) {
  return (
    <div className="location-preview">
      <div className="location" key={id}>
        <Link to={`housing/${id}`} className="location-link">
          <img src={cover} alt={title} className="location-img" />
          <p className="location-title">{title}</p>
        </Link>
      </div>
    </div>
  );
}
export default Location;
