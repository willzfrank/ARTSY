import Image from 'next/image';
import React from 'react';
import style from '../styles/Creator.module.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/css';

export default function VerticalSwiper() {
  return (
    <Swiper
      direction={'vertical'}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      modules={[Autoplay, EffectFade]}
      effect={'fade'}
      loop={true}
      className={style.swiperMainTest}
    >
      <SwiperSlide>
        <Image
          src="/Rectangle 300.png"
          alt=""
          width={800}
          height={800}
          className={style.swiperImageTest}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/Rectangle 299 (4).png"
          alt=""
          width={800}
          height={800}
          className={style.swiperImageTest}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/Rectangle 301.png"
          alt=""
          width={800}
          height={800}
          className={style.swiperImageTest}
        />
      </SwiperSlide>
    </Swiper>
  );
}
