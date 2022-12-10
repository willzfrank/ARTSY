// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import style from '../styles/Purchase.module.css';

export default function SwiperComponent() {
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
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay, EffectFade]}
      effect={'fade'}
      className={style.swiperMainTest}
    >
      <SwiperSlide>
        <Image
          src="/Rectangle 260.png"
          alt=""
          width={200}
          height={200}
          className={style.swiperImageTest}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/Rectangle 49.png"
          alt=""
          width={200}
          height={200}
          className={style.swiperImageTest}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/Rectangle 260.png"
          alt=""
          width={200}
          height={200}
          className={style.swiperImageTest}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/Rectangle 49.png"
          alt=""
          width={200}
          height={200}
          className={style.swiperImageTest}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/Rectangle 260.png"
          alt=""
          width={200}
          height={200}
          className={style.swiperImageTest}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/Rectangle 49.png"
          alt=""
          width="200"
          height={200}
          className={style.swiperImageTest}
        />
      </SwiperSlide>
    </Swiper>
  );
}
