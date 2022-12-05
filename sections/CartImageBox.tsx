import React from 'react';
import { CartImage } from '../component';
import style from '../styles/MarketPlace.module.css';

export default function CartImageBox() {
  return (
    <div className={style.cartImageContainer}>
      <CartImage />
      <CartImage />
      <CartImage />
    </div>
  );
}
