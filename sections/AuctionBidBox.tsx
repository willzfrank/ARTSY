import React from 'react';
import { AuctionBid } from '../component';
import style from '../styles/Auction.module.css';

export default function AuctionBidBox() {
  return (
    <div className={style.auctionBidMain}>
      <AuctionBid />
      <AuctionBid />
    </div>
  );
}
