import Head from 'next/head';
import React from 'react';
import HeadComponent from '../../app/Head';
import { AuctionImage, Navbar } from '../../component';
import style from '../../styles/MarketPlace.module.css';
import classes from '../../styles/Auction.module.css';
import { AuctionBidBox, AuctionImageBox } from '../../sections';
import { GetStaticProps } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async () => {
  const { auction } = await import('../../data/auction');
  const { bids } = await import('../../data/bids');
  return {
    props: {
      auction,
      bids,
    },
  };
};

const Auction: React.FC<AuctionProps> = ({ auction, bids }) => {
  return (
    <div>
      <div>
        <Head>
          <title>Auction</title>
          <meta
            name="description"
            content="Explore the latest auctions on the auction Artsy marketplace. Find unique and in-demand products from popular creators and bid on your favorite items today."
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
      </div>
      <Script
        src="https://kit.fontawesome.com/50a0fb7bf1.js"
        crossOrigin="anonymous"
      ></Script>

      <Navbar />
      <div className={style.Directory}>
        <p>
          <Link href="/">Home</Link> / <span>Auctions</span>
        </p>
      </div>
      <h2 className={classes.AuctionTitle}>
        Here’s an overview of products actively on auction, explore!
      </h2>
      <AuctionImageBox auction={auction} />

      <h2 className={classes.popularTitle}>Top bids from popular creators</h2>
      <AuctionBidBox bids={bids} />
    </div>
  );
};

export default Auction;
