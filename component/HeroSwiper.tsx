// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import style from '../styles/Purchase.module.css';

export default function HeroSwiper() {
  return (
    <div>
      <div className={style.swiperBox}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 50,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          modules={[Autoplay, EffectFade]}
          effect={'fade'}
          className={style.swiperMain}
        >
          <SwiperSlide>
            <Image
              src="/Rectangle 230.png"
              alt=""
              width={358}
              height={332}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 231.png"
              alt=""
              width={358}
              height={332}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 232 (2).png"
              alt=""
              width={358}
              height={332}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 233.png"
              alt=""
              width={358}
              height={332}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 234.png"
              alt=""
              width={358}
              height={332}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 260.png"
              alt=""
              width={358}
              height={332}
              className={style.swiperImage}
            />
          </SwiperSlide>
        </Swiper>

        {/* SWIPER 2 */}

        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          modules={[Autoplay, EffectFade]}
          effect={'fade'}
          className={style.swiperMain}
        >
          <SwiperSlide>
            <Image
              src="/Rectangle 231.png"
              alt=""
              width={358}
              height={400}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 232 (2).png"
              alt=""
              width={358}
              height={400}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 233.png"
              alt=""
              width={358}
              height={400}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 234.png"
              alt=""
              width={358}
              height={400}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 260.png"
              alt=""
              width={358}
              height={400}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 230.png"
              alt=""
              width={358}
              height={400}
              className={style.swiperImage}
            />
          </SwiperSlide>
        </Swiper>

        {/* {SWIPER 3} */}

        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          modules={[Autoplay, EffectFade]}
          effect={'fade'}
          className={style.swiperMain}
        >
          <SwiperSlide>
            <Image
              src="/Rectangle 232 (2).png"
              alt=""
              width={358}
              height={444}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 233.png"
              alt=""
              width={358}
              height={444}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 234.png"
              alt=""
              width={358}
              height={444}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 260.png"
              alt=""
              width={358}
              height={444}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 230.png"
              alt=""
              width={358}
              height={444}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 231.png"
              alt=""
              width={358}
              height={444}
              className={style.swiperImage}
            />
          </SwiperSlide>
        </Swiper>

        {/* SWIPER 4 */}

        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          modules={[Autoplay, EffectFade]}
          effect={'fade'}
          className={style.swiperMain}
        >
          <SwiperSlide>
            <Image
              src="/Rectangle 233.png"
              alt=""
              width={358}
              height={402}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 234.png"
              alt=""
              width={358}
              height={402}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 260.png"
              alt=""
              width={358}
              height={402}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 230.png"
              alt=""
              width={358}
              height={402}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 231.png"
              alt=""
              width={358}
              height={402}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 232 (2).png"
              alt=""
              width={358}
              height={402}
              className={style.swiperImage}
            />
          </SwiperSlide>
        </Swiper>

        {/* SWIPER 5 */}

        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          modules={[Autoplay, EffectFade]}
          effect={'fade'}
          className={style.swiperMain}
        >
          <SwiperSlide>
            <Image
              src="/Rectangle 234.png"
              alt=""
              width={358}
              height={358}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 260.png"
              alt=""
              width={358}
              height={358}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 230.png"
              alt=""
              width={358}
              height={358}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 231.png"
              alt=""
              width={358}
              height={358}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 232 (2).png"
              alt=""
              width={358}
              height={358}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 233.png"
              alt=""
              width={358}
              height={358}
              className={style.swiperImage}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={style.mobileSwipe}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          modules={[Autoplay, EffectCards]}
          effect={'cards'}
          grabCursor={true}
          className={style.swiperMain}
        >
          <SwiperSlide>
            <Image
              src="/Rectangle 234.png"
              alt=""
              width={320}
              height={320}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 260.png"
              alt=""
              width={320}
              height={320}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 230.png"
              alt=""
              width={320}
              height={320}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 231.png"
              alt=""
              width={320}
              height={320}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 232 (2).png"
              alt=""
              width={320}
              height={320}
              className={style.swiperImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Rectangle 233.png"
              alt=""
              width={320}
              height={320}
              className={style.swiperImage}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
