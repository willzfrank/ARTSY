import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import HeadComponent from '../app/Head';
import { Navbar } from '../component';
import styles from '../styles/construction.module.css';

type Props = {};

const construction = (props: Props) => {
  return (
    <div>
      <HeadComponent />
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
