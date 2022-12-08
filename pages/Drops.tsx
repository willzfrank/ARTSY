import React from 'react';
import HeadComponent from '../app/Head';
import { DropComponent, Navbar } from '../component';
import { Footer } from '../sections';
import style from '../styles/Drop.module.css';
import Link from 'next/link';

export default function Drops() {
  return (
    <div className={style.dropMainBox}>
      <HeadComponent />
      <Navbar />
      <h2 className={style.dropMainLinkTitle}>
        <Link href="/">Home</Link>/ <a href="/Auction/index.tsx">Auctions</a>/
        Live bid/
        <span> Drop</span>{' '}
      </h2>
      <div className={style.dropMainTitle}>
        <h1>Upcoming drops</h1>
        <p>Turn on notifications so that no drops will miss you.</p>
        <div className={style.dropMainButtonBox}>
          <p>Notify me</p>
        </div>
      </div>

      <DropComponent />
      <DropComponent />
      <DropComponent />
      <DropComponent />

      <Footer />
    </div>
  );
}
