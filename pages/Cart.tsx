import React from 'react';
import HeadComponent from '../app/Head';
import {
  CartComponent,
  CheckoutBox,
  MarketplaceLink,
  Navbar,
} from '../component';
import style from '../styles/Cart.module.css';

export default function Cart() {
  return (
    <div>
      <HeadComponent />
      <Navbar />
      <div className={style.marketLinkBox}>
        <div className={style.marketLink}>
          <div className={style.marketLinkContent}>
            <p className={style.marketLinkStyling}>Shopping cart</p>
            <p className={style.cartHover}>Shipping details</p>
            <p> className={style.cartHover}Payment details</p>
          </div>
        </div>
      </div>
      <CartComponent />
      <CartComponent />
      <CartComponent />
      <CheckoutBox />
    </div>
  );
}
