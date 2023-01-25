import Image from 'next/image';
import React from 'react';
import style from '../styles/Cart.module.css';

type Props = {
  items: Product[];
  id: string;
};

export default function CatComponent({ id, items }: Props) {
  return (
    <div className={style.shoppingBox}>
      <div className={style.shoppingContainer}>
        <div className={style.shoppingContentContainer}>
          <Image
            src={items[0].url}
            width={210}
            height={196}
            alt=""
            className={style.shoppingImgContentContainer}
          />
          <div>
            <p className={style.shoppingText1}>{items[0].name}</p>
            <p className={style.shoppingText2}>{items[0].creator}</p>
            <p className={style.shoppingText3}>
              Size: <span>{`${items[0].size.ft} ft`}</span>
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
          <p>${items[0].price.usd}</p>
        </div>
      </div>
    </div>
  );
}
