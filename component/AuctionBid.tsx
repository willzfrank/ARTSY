import Image from 'next/image';
import React from 'react';
import style from '../styles/Auction.module.css';

export default function AuctionBid() {
  return (
    <div className={style.auctionBid}>
      <div className={style.auctionBidBox}>
        <div className={style.auctionBidHeart}>
          <i className="uil uil-heart"></i>
        </div>
        <div>
          <Image src="/Rectangle 57.png" alt="" height={240} width={398} />
        </div>
        <div className={style.auctionBidText}>
          <p>Out of the box</p>
        </div>
      </div>
      <div>
        <p className={style.auctionBidTextBody}>
          Creator : <span>Dan Murray</span>
        </p>
        <p className={style.auctionBidTextBody}>
          Date : <span>12/08/22</span>
        </p>
        <p className={style.auctionBidTextBody}>
          Highest bid : <span>0.57 ETH</span>
        </p>
      </div>
      <div className={style.auctionBidButtonBox}>
        <div className={style.auctionBidButton}>
          <p>Current bid</p>
          <span>0.987 ETH</span>
        </div>
        <button>Place bid</button>
      </div>
    </div>
  );
}
