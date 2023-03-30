import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "../css/carousel.css";
import "swiper/css";

const Carousel = ({ mainUrl }) => {
  return (
    <div className="carousel">
      <Swiper
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
                <img className="swiperSlide-img" src={data} alt="" />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
