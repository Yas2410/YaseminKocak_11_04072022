//Import de mes SVG Stars qui vont servir à
//illustrer le Rating des locations
import starRed from "../assets/star-red.svg";
import starGrey from "../assets/star-grey.svg";
//Style section Rating
import "../styles/rating.css";

/*SI LIBRAIRIE POSSIBLE
REACT LIBRARY AVEC AJOUT D'ICONES
RAPPELES EN BALISE <>
npm install react-icons --save
icons react // import d'images dans le dossier
Images plutot que librarie icons react
import { VscStarFull } from "react-icons/vsc";
*/

//Données RATING de mon fichier de data
//Chaque location est notée de 1 à 5 => const stars
const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) =>
        //Si le rating (data.js) est >= star
        //Alors les étoiles sont rouges
        //Sinon elles sont grises
        rating >= star ? (
          <img
            className="starRed"
            key={star.toString()}
            src={starRed}
            alt=""
          ></img>
        ) : (
          <img
            className="starGrey"
            key={star.toString()}
            src={starGrey}
            alt=""
          ></img>
          /*
          <VscStarFull
            style={{ color: "#FF6060" }}
            className="rating-stars"
            //Ajouter KEY sinon, erreur dans la console :
            //Warning: Each child in a list should have a unique "key" prop.
            key={star.toString()}
          />
          <VscStarFull
            style={{ color: "#E3E3E3" }}
            className="rating-stars"
            //Ajouter KEY sinon, erreur dans la console :
            //Warning: Each child in a list should have a unique "key" prop.
            key={star.toString()}
          />
          */
        )
      )}
    </div>
  );
};

export default Rating;
