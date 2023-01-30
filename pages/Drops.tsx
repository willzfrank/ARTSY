import React from 'react';
import Head from 'next/head';
import { toast, ToastContainer } from 'react-toastify';
import HeadComponent from '../app/Head';
import Navbar from '../component/Navbar';
import DropComponent from '../component/DropComponent';
import Footer from '../sections/Footer';
import style from '../styles/Drop.module.css';
import { GetStaticProps } from 'next';
import Link from 'next/link';

export const getStaticProps: GetStaticProps<DropsProps> = async () => {
  const { drops } = await import('../data/drops');
  return {
    props: {
      drops,
    },
  };
};

const Drops: React.FC<DropsProps> = ({ drops }) => {
  return (
    <div className={style.dropMainBox}>
      <Head>
        <title>Drops </title>
        <meta name="description" content="Upcoming drops on Artsy" />
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
      <h2 className={style.dropMainLinkTitle}>
        <Link href="/">Home</Link>/ <Link href="/Auction">Auctions</Link>/{' '}
        <Link href="/Auction/ap2">Live bid</Link> /<span> Drop</span>{' '}
      </h2>
      <div className={style.dropMainTitle}>
        <h1>Upcoming drops</h1>
        <p className={style.dropText}>
          Turn on notifications so that no drops will miss you.
        </p>
        <div
          className={style.dropMainButtonBox}
          onClick={() => toast('notification turned on')}
        >
          <p>Notify me</p>
        </div>
      </div>
      <DropComponent drops={drops} />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Drops;
