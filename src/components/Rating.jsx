import React from "react";
//npm install react-icons --save
//icons react // import d'images dans le dossier
import { VscStarFull } from "react-icons/vsc";

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) =>
        rating >= star ? (
          <VscStarFull
            style={{ color: "#FF6060" }}
            className="rating-stars"
            //Ajouter KEY sinon, erreur dans la console :
            //Warning: Each child in a list should have a unique "key" prop.
            key={star.toString()}
          />
        ) : (
          <VscStarFull
            style={{ color: "#E3E3E3" }}
            className="rating-stars"
            //Ajouter KEY sinon, erreur dans la console :
            //Warning: Each child in a list should have a unique "key" prop.
            key={star.toString()}
          />
        )
      )}
    </div>
  );
};

export default Rating;
