import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/swiperH.css";
import { Link } from "react-router-dom";
import { categorie2 } from "../data/categorie2";
import Header from "./Header";

const SwiperH = ({ onOff, setOnOff }) => {
  return (
    <div className="swiper swiper__slide">
      <Swiper
        className="swiper__slide"
        autoplay={{
          delay: 10000,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
      >
        {categorie2.map((data, key) => {
          return (
            <div key={key}>
              <SwiperSlide>
                <div>
                  <img
                    className="swiper__swiperSlide-img"
                    src={data.mainUrl}
                    alt="swiper-img"
                  />
                  <div className="overlay__swiper">
                    <Link to={data.link}>{data.title}</Link>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
      <div className="swiper__header">
        <Header onOff={onOff} setOnOff={setOnOff}></Header>
      </div>
    </div>
  );
};

export default SwiperH;
