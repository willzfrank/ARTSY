import React from 'react';
import style from '../styles/Cart.module.css';

export default function CheckoutBox() {
  return (
    <div className={style.checkBoxContainer}>
      <div className={style.checkBox}>
        <div>Proceed to checkout</div>
        <p>Continue shopping</p>
      </div>
      <div className={style.checkBoxPriceBox}>
        <div className={style.checkBoxPrice}>
          <p className={style.checkBoxPrice1}>Products in cart :</p>
          <p className={style.checkBoxPrice1}>Shipping : </p>
          <p className={style.checkBoxPrice1}>Total :</p>
        </div>
        <div className={style.checkBoxPrice}>
          <p className={style.checkBoxPrice2}>3 items</p>
          <p className={style.checkBoxPrice2}>$2.50</p>
          <p className={style.checkBoxPrice2}>$114.00</p>
        </div>
      </div>
    </div>
  );
}
