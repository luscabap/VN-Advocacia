import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from "/assets/banner1.png";
import bannerEquipe from "/assets/bannerEquipe.png";
import bannerPremio from "/assets/bannerPremio.png";
import { Autoplay, Pagination } from "swiper/modules";

export const CarouselImages = () => {
  return (
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        slidesPerView={1}
        modules={[ Autoplay, Pagination ]}
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        pagination={true}
        className='max-w-[900px]'
    >
      <SwiperSlide><img src={banner1}/></SwiperSlide>
      <SwiperSlide><img src={bannerPremio}/></SwiperSlide>
      <SwiperSlide><img src={bannerEquipe}/></SwiperSlide>
    </Swiper>
  )
}