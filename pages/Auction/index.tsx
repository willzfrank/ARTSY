import React from 'react';
import HeadComponent from '../../app/Head';
import { AuctionImage, Navbar } from '../../component';
import style from '../../styles/MarketPlace.module.css';
import classes from '../../styles/Auction.module.css';
import { AuctionBidBox, AuctionImageBox } from '../../sections';
function Auction() {
  return (
    <div>
      <HeadComponent />
      <Navbar />
      <div className={style.Directory}>
        <p>
          Home/ <span>Auctions</span>
        </p>
      </div>
      <h2 className={classes.AuctionTitle}>
        Here’s an overview of products actively on auction, explore!
      </h2>
      <AuctionImageBox />

      <h2 className={classes.popularTitle}>Top bids from popular creators</h2>
      <AuctionBidBox />
    </div>
  );
}

export default Auction;
