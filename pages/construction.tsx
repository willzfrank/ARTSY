import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Navbar } from '../component';
import styles from '../styles/construction.module.css';

const construction = () => {
  return (
    <div>
      <Head>
        <title>Page under construction</title>
        <meta
          name="description"
          content="This page is currently under construction but we are ready to take care of your needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      <div className={styles.constructionContainer}>
        <div className={styles.constructionHeader}>
          <h1>
            <span className={styles.constructionHeader1}>WEBPAGE</span>
            <span className={styles.constructionHeader2}>
              Under Construction
            </span>
          </h1>
          <p>
            This page is under construction but we are ready to take care of
            your needs{' '}
          </p>
          <button className={styles.constructionbtn}>
            <Link href="/MarketPlace">Go Shopping</Link>
          </button>
        </div>
        <div className={styles.constructionImgBox}>
          <Image
            src="/construction-realistic-with-orange-helmet-caution-placard-fencing-tape-with-yellow-black-stripes/28793.jpg"
            alt=""
            width={500}
            height={500}
            className={styles.constructionImg}
          />
          <p>
            <a href="https://www.freepik.com/free-vector/construction-realistic-with-orange-helmet-caution-placard-fencing-tape-with-yellow-black-stripes_6867598.htm#query=under%20construction&position=3&from_view=search&track=sph">
              Image by macrovector
            </a>{' '}
            on Freepik
          </p>
        </div>
      </div>
    </div>
  );
};

export default construction;
