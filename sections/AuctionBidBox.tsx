import React from 'react';
import Image from 'next/image';
import style from '../styles/Auction.module.css';
import { HeartIcon } from '../component';

type Bid = {
  current: {
    eth: number;
  };
  highest: {
    eth: number;
  };
  url: string;
  id: string;
  name: string;
  creator: string;
  date: {
    day: number;
    month: number;
    year: number;
  };
};

type BidProps = {
  bids: Bid[];
};

const AuctionBidBox: React.FC<BidProps> = ({ bids }) => {
  return (
    <div className={style.auctionBidMain}>
      {bids.map((bid) => (
        <div className={style.auctionBid} key={bid.id}>
          <div className={style.auctionBidBox}>
            <div className={style.auctionBidHeartBox}>
              <HeartIcon />
            </div>

            <div>
              <Image
                src={bid.url}
                alt=""
                height={240}
                width={398}
                className={style.bidImage}
              />
            </div>
            <div className={style.auctionBidText}>
              <p>{bid.name}</p>
            </div>
          </div>
          <div>
            <p className={style.auctionBidTextBody}>
              Creator : <span>{bid.creator}</span>
            </p>
            <p className={style.auctionBidTextBody}>
              Date :{' '}
              {bid.date && (
                <span>{`${bid.date.month}/${bid.date.day}/${bid.date.year}`}</span>
              )}
            </p>
            <p className={style.auctionBidTextBody}>
              Highest bid : <span>{`${bid.highest.eth} ETH`}</span>
            </p>
          </div>
          <div className={style.auctionBidButtonBox}>
            <div className={style.auctionBidButton}>
              <p>Current bid</p>
              <span>{`${bid.current.eth} ETH`}</span>
            </div>
            <button>Place bid</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuctionBidBox;
