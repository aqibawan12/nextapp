import React from "react";
 import {  useNavigate } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import images from "./images";
import "./styles.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";


export default function App() {
 let navigate=useNavigate()
  function operation(id){
   navigate("/Product/" + id)
  }
  
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
     
        navigation={true}
        pagination={{
          clickable: true,
        }}
         loop={true}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className='mySwiper'
         >
      
          {images.map((val,index) => (
              <SwiperSlide  key={index+1} onClick={()=>operation(val.id)} >
            <img style={{imageRendering:'pixelated'}} src={val.imq} alt='12' />
             </SwiperSlide>
          ))}
 
      </Swiper>
    </>
  );
}
