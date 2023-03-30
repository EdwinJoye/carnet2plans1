import Header from "../components/Header";
import Carousel from "../components/Carousel";
import { categories } from "../data/categories";
import { Link } from "react-router-dom";
import "../css/home.css";

const Home = ({ onOff, setOnOff }) => {
  return (
    <div className="home">
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div className="container fadeIn">
        <div>
          {categories.map((data, key) => {
            return (
              <div key={key} className="home__carousel-div">
                <div className="home__carousel-box">
                  <Link to={data.link}>
                    <Carousel
                      mainUrl={data.mainUrl}
                      title={data.title}
                      description={data.description}
                    ></Carousel>
                  </Link>
                </div>
                <div className="home__title-texte">
                  <h1>{data.title}</h1>
                  <p>{data.texte}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>HOME</div>
    </div>
  );
};

export default Home;
