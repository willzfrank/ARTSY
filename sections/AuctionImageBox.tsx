import React from 'react';
import Image from 'next/image';
import { AuctionImage } from '../component';
import style from '../styles/Auction.module.css';

type Auction = {
  id: string;
  url: string;
};

type AuctionProps = {
  auction: Auction[];
};

const AuctionImageBox: React.FC<AuctionProps> = ({ auction }) => {
  return (
    <div className={style.auctionBoxImage}>
      <div className={style.auctionImage}>
        {auction.map((item) => (
          <div className={style.auctionImageBox} key={item.id}>
            <Image
              src={item.url}
              alt=""
              width={400}
              height={350}
              className={style.auctionImageMain}
            />
            <div className={style.auctionImageTime}>
              <p>6hr : 40mins: 15s</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuctionImageBox;
