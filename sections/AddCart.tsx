import Image from 'next/image';
import React from 'react';
import styled from '../styles/MarketPlace.module.css';

export default function AddCart() {
  return (
    <div className={styled.AddCart}>
      <div className={styled.AddCartImage}>
        <Image
          src="/Rectangle Cart.png"
          width={500}
          height={926}
          alt="pics"
          className={styled.cartImage}
        />
      </div>
      <div className={styled.AddCartContainer}>
        <div className={styled.cartContainer}>
          <h2>Boolean Egyptian</h2>
          <p>0.09</p>
        </div>
        <div className={styled.AddCartCreator}>
          <p>
            Creator : <span>Ali Dawa</span>{' '}
          </p>
          <p>Made in Italy</p>
          <p>Total views: 1.7K views</p>
          <div className={styled.CartButton}>
            <i className={`${styled.cartIcon} uil uil-minus`}></i>
            <p>1</p>
            <i className={`${styled.cartIcon} uil uil-plus`}></i>
          </div>
          <div className={styled.CartButtonFav}>
            <button>
              Add to cart <i className="uil uil-arrow-right"></i>
            </button>
            <div className={styled.CartFav}>
              <i className="uil uil-heart"></i>
            </div>
          </div>
        </div>
        <div className={styled.CartOthers}>
          <h3>
            Description <i className="uil uil-angle-down"></i>
          </h3>
        </div>
        <div className={styled.CartOthers}>
          <h3>
            Listings <i className="uil uil-angle-down"></i>
          </h3>
        </div>
        <div className={styled.CartOthers}>
          <h3>
            Status <i className="uil uil-angle-down"></i>
          </h3>
        </div>
      </div>
    </div>
  );
}
