import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "/assets/img1.png";
import img2 from "/assets/img2.png";
import x from "/assets/s1.png";
import { Autoplay, Pagination } from "swiper/modules";

export const CarouselImages = () => {
  return (
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        slidesPerView={1}
        modules={[ Autoplay, Pagination ]}
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        pagination={true}
    >
      <SwiperSlide><img src={img1}/></SwiperSlide>
      <SwiperSlide><img src={img2}/></SwiperSlide>
      <SwiperSlide><img src={x}/></SwiperSlide>
    </Swiper>
  )
}