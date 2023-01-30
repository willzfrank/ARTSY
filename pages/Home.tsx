import { UpcomingAuction } from '../component';
import HeroSwiper from '../component/HeroSwiper';
import Navbar from '../component/Navbar';
import { Creators, Footer, HeroHome, SectionListComponent } from '../sections';
import Featured from '../sections/Featured';
import React, { useState } from 'react';
import Image from 'next/image';

export default function Homepage() {
  const [isLoading, setLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div>
      {isLoading ? (
        <div className="preloader">
          <Image
            src="/shopping bag animation_02.gif"
            alt="shopping_preloader"
            width={150}
            height={100}
            className="preloader_img"
          />
        </div>
      ) : (
        <div>
          <Navbar />
          <HeroHome />
          <HeroSwiper />
          <Featured />
          <UpcomingAuction />
          <SectionListComponent />
          <Creators />
          <Footer />
        </div>
      )}
    </div>
  );
}
