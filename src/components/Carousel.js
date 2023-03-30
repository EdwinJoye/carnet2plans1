import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "../css/carousel.css";
import "swiper/css";

const Carousel = ({ mainUrl, title, description }) => {
  return (
    <div className="carousel carousel__slide">
      <Swiper
        className="carousel__slide"
        autoplay={{
          delay: 4000,
        }}
        loop={true}
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        speed={900}
      >
        {mainUrl.map((data, key) => {
          return (
            <div key={key}>
              <SwiperSlide>
                <img
                  className="carousel__swiperSlide-img"
                  src={data}
                  alt="swiper-img"
                />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
      <div className="overlay">
        <div className="overlay__title">{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default Carousel;
