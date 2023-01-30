import Image from 'next/image';
import React from 'react';
import HeadComponent from '../app/Head';
import { Navbar } from '../component';
import style from '../styles/Success.module.css';

type Props = {};

function Success({}: Props) {
  const [isLoading, setLoading] = React.useState(true);

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
          <HeadComponent />
          <Navbar />
          <div className={style.congrats}>
            <div className={style.color1}></div>
            <div className={style.color2}></div>
            <div className={style.color3}></div>
            <Image
              src="/Woman get online delivery.png"
              alt="Congrats image"
              width={454}
              height={405}
              className={style.congratsImage}
            />
            <h2>Hey Celestina, thank you for your purchase. </h2>
            <div>
              <p>
                You are amazing. Cheers to being <span>ARTSY!</span>
              </p>
              <Image
                src="/noto_party-popper.png"
                alt="party"
                width={32}
                height={33}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Success;
