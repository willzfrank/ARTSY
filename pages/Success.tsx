import Head from 'next/head';
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
  }, []);
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
          <Head>
            <title>Success</title>
            <meta
              name="description"
              content="Congratulations on your successful purchase! Celebrate being artsy with us."
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <link rel="icon" href="/favicon_io/android-chrome-512x512.png" />
            <link
              href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,300,400&display=swap"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
            />
          </Head>
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
            <h2>Heyyy, thank you for your purchase. </h2>
            <div className={style.congratsTextBox}>
              <p>
                You are amazing. Cheers to being <span>ARTSY!</span>
                <Image
                  src="/noto_party-popper.png"
                  alt="party"
                  width={32}
                  height={33}
                />
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Success;
