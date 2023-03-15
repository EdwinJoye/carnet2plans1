import Header from "../components/Header";
import Carousel from "../components/Carousel";
import { categories } from "../data/categories";
import { Link } from "react-router-dom";
import "../css/home.css";
const Home = ({ onOff, setOnOff, selectedId, setSelectedId }) => {
  return (
    <div className="container">
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div className="carousel-div">
        {categories.map((data, key) => {
          return (
            <div key={key}>
              <div>{data.title}</div>
              <div className="carousel-box">
                <Link to={data.link}>
                  <Carousel mainUrl={data.mainUrl}></Carousel>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div>HOME</div>
    </div>
  );
};

export default Home;
