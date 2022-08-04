import starRed from "../assets/star-red.svg";
import starGrey from "../assets/star-grey.svg";
import "../styles/rating.css";

//Données RATING de mon fichier de data
//Chaque location est notée de 1 à 5 => const stars
const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) =>
        //Si le rating (housing.json) est >= star
        //Alors les étoiles sont rouges
        //Sinon elles sont grises
        rating >= star ? (
          <img
            className="starRed"
            key={star.toString()}
            src={starRed}
            alt="star"
          ></img>
        ) : (
          <img
            className="starGrey"
            key={star.toString()}
            src={starGrey}
            alt="star"
          ></img>
        )
      )}
    </div>
  );
};

export default Rating;
