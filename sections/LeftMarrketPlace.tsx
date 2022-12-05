import React from 'react';
import { CollectionMarket, MarketCategory, Slider } from '../component';
import ArtistMarket from '../component/ArtistMarket';
import style from '../styles/LeftMarket.module.css';

const LeftMarrketPlace = () => {
  return (
    <div className={style.marketPlaceMain}>
      <MarketCategory />
      <Slider />
      <ArtistMarket />
      <CollectionMarket />
    </div>
  );
};

export default LeftMarrketPlace;
