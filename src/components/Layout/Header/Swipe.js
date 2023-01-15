import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Box from './Box';

export default function Swipe() {
  return (
    <Swiper
          spaceBetween={20}
          slidesPerView={11}
          breakpoints={{
            1200: {
              width: 1150,
              slidesPerView: 11,
            },
            768: {
              width: 768,
              slidesPerView: 7,
            },
            600: {
              width: 600,
              slidesPerView: 6,
            },
            400: {
              width: 400,
              slidesPerView: 5,
            },
            200: {
              width: 200,
              slidesPerView: 4
            },
            100: {
              width: 100,
              slidesPerView: 2
            }
          }}
        >
          <SwiperSlide><Box link='Hero/superman' img='images/nav-swiper/ssm.jpeg'/></SwiperSlide>
          <SwiperSlide><Box link='Hero/flash' img='images/nav-swiper/sf.jpeg'/></SwiperSlide>
          <SwiperSlide><Box link='Hero/ironman' img='images/nav-swiper/sim.jpeg'/></SwiperSlide>
          <SwiperSlide><Box link='Hero/spiderman' img='images/nav-swiper/sspiderman.jpeg'/></SwiperSlide>
          <SwiperSlide><Box link='Hero/wonder woman' img='images/nav-swiper/sww.jpeg'/></SwiperSlide>
          <SwiperSlide><Box link='Hero/punisher' img='images/nav-swiper/sp.jpeg'/></SwiperSlide>
          <SwiperSlide><Box link='Hero/batman' img='images/nav-swiper/sb.jpeg'/></SwiperSlide>
          <SwiperSlide><Box link='Hero/captain america' img='images/nav-swiper/sca.jpg'/></SwiperSlide>
          <SwiperSlide><Box link='Hero/black panther' img='images/nav-swiper/sbp.jpg'/></SwiperSlide>
          <SwiperSlide><Box link='Hero/superman' img='images/nav-swiper/ssm.jpeg'/></SwiperSlide>
          <SwiperSlide><Box link='Hero/flash' img='images/nav-swiper/sf.jpeg'/></SwiperSlide>
          <SwiperSlide><Box link='Hero/ironman' img='images/nav-swiper/sim.jpeg'/></SwiperSlide>
          <SwiperSlide><Box link='Hero/spiderman' img='images/nav-swiper/sspiderman.jpeg'/></SwiperSlide>
          
        </Swiper>
  )
}
