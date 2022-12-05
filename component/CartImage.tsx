import Image from 'next/image';
import React from 'react';
import styled from '../styles/MarketPlace.module.css';

export default function CartImage() {
  return (
    <div>
      <div className={styled.cartImageBox}>
        <div className={styled.cartImageHeartBox}>
          <i className="uil uil-heart"></i>
        </div>
        <div className={styled.cartImage}>
          <Image
            src="/Rectangle 65.png"
            alt=""
            width={250}
            height={250}
            className={styled.cartImageMain}
          />
        </div>
        <div className={styled.cartImageBottom}>
          <div>
            <p>Sassy</p>
          </div>
          <div>
            <p>3.20</p>
          </div>
        </div>
      </div>
    </div>
  );
}
