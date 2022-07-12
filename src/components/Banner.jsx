import "../styles/banner.css";

function Banner({ img, txt }) {
  return (
    <div
      className="kasa-banner"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="kasa-banner-bg"></div>
      <p className="banner-txt">{txt}</p>
    </div>
  );
}

export default Banner;
