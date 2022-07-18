import "../styles/housingAll.css";

/*
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
*/

function Location(props) {
  return (
    <div className="location-preview">
      <div className="location" key={props.id}>
        <a className="location-link" href={"/housing=" + props.id}>
          <img src={props.cover} alt={props.title} className="location-img" />
          <p className="location-title">{props.title}</p>
        </a>
      </div>
    </div>
  );
}

export default Location;
