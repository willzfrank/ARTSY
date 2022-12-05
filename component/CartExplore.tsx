import React from 'react';
import styled from '../styles/MarketPlace.module.css';

export default function CartExplore() {
  return (
    <div className={styled.CartExplore}>
      <h3>Explore more from this collection</h3>
      <div className={styled.cartArrow}>
        <div>
          <i className="uil uil-angle-left-b"></i>
        </div>
        <div>
          <i className="uil uil-angle-right-b"></i>
        </div>
      </div>
    </div>
  );
}
