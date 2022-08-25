import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

export default function App() {
  const pic =
  "https://cdn.shopify.com/s/files/1/2635/3244/products/CAT_8985_360x.jpg?v=1657878980";
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={0}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
       
        pagination={{
          clickable: true,
        }}
      
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide onClick={()=>console.log(12)}>
          <img src={pic}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={pic}/>        </SwiperSlide>
      
      </Swiper>
    </>
  );
}
