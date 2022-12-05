import Image from 'next/image';
import React from 'react';
import style from '../styles/Auction.module.css';

export default function AuctionImage() {
  return (
    <div className={style.auctionImage}>
      <div className={style.auctionImageBox}>
        <Image src="/Rectangle 247.png" alt="" width={400} height={350} />
        <div className={style.auctionImageTime}>
          <p>6hr : 40mins: 15s</p>
        </div>
      </div>
    </div>
  );
}
