import { useState } from "react";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import "../styles/slider.css";

//Les props sont des propriétés passées à un composant
function Slider(props) {
  let [current, setCurrent] = useState(0);
  const length = props.pictures.length;

  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    //Si le diaporama ne contient pas plus d'une photo
    <div className="slider-main">
      {length === 1 ? (
        <div className="slider-pix">
          <img className="pix" src={props.pictures[0]} alt={"Location"} />
        </div>
      ) : (
        //SINON, j'intègre des icones permettant de naviguer entre les différents médias :
        //Au clic sur l'icone {arrowLeft}, ma constante "previousSlide"
        //est appliquée : je reviens à l'image précédente
        //Au clic sur l'icone {arrowRight}, ma constante "nextSlide"
        //est appliquée : je passe à l'image suivante
        <div>
          <div className="slider-previous" onClick={previousSlide}>
            <img
              src={arrowLeft}
              alt="média précédent"
              className="slider-iconPrev"
            />
          </div>
          {props.pictures.map((pix, index) => {
            return (
              <div className="slider-pix" key={index}>
                {index === current && (
                  <img
                    className="pix"
                    src={pix}
                    alt={"Photo n°" + (current + 1) + " de la location"}
                  />
                )}
              </div>
            );
            //Ainsi qu'un compteur m'indiquant le média actuel / l'ensemble des médias :
            // Pour la partie "slider-nbr" : length correspond au
            //total des photos pour chaque location
            //En fonction du media qui apparait à l'écran, j'indique
            //sa position par rapport au nombre total de photos
          })}
          <p className="slider-nbr">{current + 1 + "/" + length}</p>
          <div className="slider-next" onClick={nextSlide}>
            <img
              src={arrowRight}
              alt="média suivant"
              className="slider-iconNext"
            />
          </div>{" "}
        </div>
      )}
    </div>
  );
}

export default Slider;
