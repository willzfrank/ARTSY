import React from 'react'
import style from '../styles/Auction.module.css';

type Props = {}

const HeartIcon = (props: Props) => {
    const [isRed, setIsRed] = React.useState(false);
  return (
    <div className={style.auctionBidHeart}>
      <i
        className={`fa-solid fa-heart ${isRed ? 'red' : ''}`}
        onClick={() => setIsRed(!isRed)}
      ></i>
    </div>
  );
}

export default HeartIcon