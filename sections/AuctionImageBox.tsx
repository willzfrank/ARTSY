import React from 'react';
import { AuctionImage } from '../component';
import style from '../styles/Auction.module.css';

export default function AuctionImageBox() {
  return (
    <div className={style.auctionBoxImage}>
      <AuctionImage />
      <AuctionImage />
      <AuctionImage />
    </div>
  );
}
