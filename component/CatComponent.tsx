import Image from 'next/image';
import React from 'react';
import style from '../styles/Cart.module.css';

export default function CatComponent() {
  return (
    <div className={style.shoppingBox}>
      <div className={style.shoppingContainer}>
        <div className={style.shoppingContentContainer}>
          <Image
            src=""
            width={210}
            height={196}
            alt=""
            className={style.shoppingImgContentContainer}
          />
          <div>
            <p className={style.shoppingText1}>Philomena ‘22</p>
            <p className={style.shoppingText2}>Clearamane</p>
            <p className={style.shoppingText3}>
              Size: <span>200 ft</span>
            </p>
            <div className={style.shoppingCounter}>
              <p>-</p>
              <p>1</p>
              <p>+</p>
            </div>
          </div>
        </div>
        <div className={style.shoppingClose}>
          <i className="uil uil-times-circle"></i>
          <p>$35.50</p>
        </div>
      </div>
    </div>
  );
}
