import { Link } from "react-router-dom";
import "../styles/error.css";

function Error() {
  return (
    <div className="main-section">
      <div className="error-main">
        <h1 className="error-nbr">404</h1>
        <h2 className="error-txt">
          Oups ! La page que vous demandez n'existe pas.
        </h2>
        <Link className="home-link" to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
}

export default Error;
