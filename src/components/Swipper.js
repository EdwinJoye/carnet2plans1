import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/swipper.css";
import { categorie2 } from "../data/categorie2";

const Swipper = () => {
  return (
    <div className="swipper swipper__slide">
      <Swiper
        className="swipper__slide"
        autoplay={{
          delay: 4000,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {categorie2.map((data, key) => {
          return (
            <div key={key}>
              <SwiperSlide>
                <div className="test">
                  <img
                    className="swipper__swiperSlide-img"
                    src={data.mainUrl}
                    alt="swiper-img"
                  />
                  <div className="overlay__swipper">{data.title}</div>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Swipper;
