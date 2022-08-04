import "../styles/banner.css";

function Banner({ img, txt }) {
  return (
    //Je vais retourner une div contenant mon image
    //(sources "img" & "txt" dans ma page "Home.jsx")
    <div className="banner-main">
      <div className="kasa-banner">
        <img
          className="banner-img"
          src={img}
          alt="Bannière page d'accueil KASA"
        />
        <p className="banner-txt">{txt}</p>
      </div>
    </div>
  );
}

export default Banner;
