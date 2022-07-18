//Import de LINK qui va permettre la navigation entre
//mes pages : Ici, retourner à l'accueil suite erreur d'affichage
import { Link } from "react-router-dom";
//Style de ma page ERREUR
import "../styles/error.css";

function Error() {
  return (
    <div className="error-main">
      <h1 className="error-nbr">404</h1>
      <h2 className="error-txt">
        Oups ! La page que vous demandez n'existe pas.
      </h2>
      <Link className="home-link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
