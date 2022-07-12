import Banner from "../components/Banner";
import Location from "../components/Location";
import banner from "../assets/banner.png";
import "../styles/home.css";
import { data } from "../data/data";

function Home() {
  return (
    <div className="main">
      <Banner img={banner} txt="Chez vous, partout et ailleurs" />
      <div className="location-section">
        {data.map((data) => {
          return (
            <Location
              title={data.title}
              cover={data.cover}
              key={data.id}
              id={data.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
