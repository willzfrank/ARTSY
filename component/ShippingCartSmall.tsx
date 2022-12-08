import React from 'react';
import Image from 'next/image';
import style from '../styles/Shipping.module.css';

export default function ShippingCartSmall() {
  return (
    <div className={style.shippingBox}>
      <div className={style.shippingContainer}>
        <div className={style.shippingContentContainer}>
          <Image
            src=""
            width={166}
            height={196}
            alt=""
            className={style.shippingImgContentContainer}
          />
          <div>
            <p className={style.shippingText1}>Philomena ‘22</p>
            <p className={style.shippingText2}>Clearamane</p>
            <p className={style.shippingText3}>
              Size: <span>200 ft</span>
            </p>
            <div className={style.shippingCounter}>
              <p>-</p>
              <p>1</p>
              <p>+</p>
            </div>
          </div>
        </div>
        <div className={style.shippingClose}>
          <i className="uil uil-times-circle"></i>
          <p>$35.50</p>
        </div>
      </div>
    </div>
  );
}
