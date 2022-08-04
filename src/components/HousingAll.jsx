import "../styles/housingAll.css";

function Location(props) {
  //Sur la vue globale des locations, j'affiche:
  //La photo miniature = cover
  //Le titre = title
  //Au clic sur la location, je suis renvoyée vers la page détaillée
  //par le biais de mon "href" qui prend en paramètre d'URL l'ID correspondant
  // + SANS OUBLIER DE METTRE UNE CLE UNIQUE (key)
  return (
    <div className="housing-preview" key={props.id}>
      <a className="housing-link" href={"/housing=" + props.id}>
        <img src={props.cover} alt={props.title} className="housing-img" />
        <p className="housingAll-title">{props.title}</p>
      </a>
    </div>
  );
}

export default Location;
