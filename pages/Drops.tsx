import React from 'react';
import HeadComponent from '../app/Head';
import { DropComponent, Navbar } from '../component';
import { Footer } from '../sections';
import style from '../styles/Drop.module.css';
import Link from 'next/link';
import { GetStaticProps } from 'next';

type Drop = {
  id: string;
  title: string;
  creator: string;
  desc: string;
  img: string;
  active: string;
  auction: {
    time: string;
    date: string;
  };
  date: {
    day: number;
    month: string;
    time: string;
    timezone: string;
  };
};

type DropsProps = {
  drops: Drop[];
};

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
      <HeadComponent />
      <Navbar />
      <h2 className={style.dropMainLinkTitle}>
        <Link href="/">Home</Link>/ <a href="/Auction/index.tsx">Auctions</a>/
        Live bid/
        <span> Drop</span>{' '}
      </h2>
      <div className={style.dropMainTitle}>
        <h1>Upcoming drops</h1>
        <p className={style.dropText}>
          Turn on notifications so that no drops will miss you.
        </p>
        <div className={style.dropMainButtonBox}>
          <p>Notify me</p>
        </div>
      </div>
      <DropComponent drops={drops} />
      <Footer />
    </div>
  );
};

export default Drops;
