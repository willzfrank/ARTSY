import Image from 'next/image';
import React from 'react';
import HeadComponent from '../app/Head';
import { Navbar } from '../component';
import style from '../styles/Purchase.module.css';
export default function Purchase() {
  return (
    <div>
      <HeadComponent />
      <Navbar />
      <div className={style.purchaseBox}>
        <Image
          src="/Woman get online delivery.png"
          alt=""
          width={404}
          height={400}
        />
        <h2>Hey Celestina, thank you for your purchase. </h2>
        <p>
          You are amazing. Cheers to being <span>ARTSY</span> !
        </p>
      </div>
    </div>
  );
}
