import React from 'react';
import HeadComponent from '../app/Head';
import { MarketplaceLink, Navbar } from '../component';
import { PaymentComponent } from '../sections';
import style from '../styles/Cart.module.css';

export default function Shipping() {
  return (
    <div>
      <HeadComponent />
      <Navbar />
      <div className={style.marketLinkBox}>
        <div className={style.marketLinkShipping}>
          <div className={style.marketLinkContent}>
            <p className={style.cartHover}>Shopping cart</p>
            <p className={style.marketLinkStyling}>Shipping details</p>
            <p className={style.cartHover}>Payment details</p>
          </div>
        </div>
      </div>
      <PaymentComponent />
    </div>
  );
}
