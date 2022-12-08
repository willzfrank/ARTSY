import React from 'react';
import style from '../styles/Cart.module.css';

export default function MarketplaceLink() {
  return (
    <div className={style.marketLinkBox}>
      <div className={style.marketLink}>
        <div className={style.marketLinkContent}>
          <p>Shopping cart</p>
          <p>Shipping details</p>
          <p>Payment details</p>
        </div>
      </div>
    </div>
  );
}
