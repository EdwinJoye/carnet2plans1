import "../css/home.css";
import SwiperH from "../components/SwiperH";

const Home = ({ onOff, setOnOff }) => {
  return (
    <div className="home">
      <SwiperH onOff={onOff} setOnOff={setOnOff}></SwiperH>
    </div>
  );
};

export default Home;
