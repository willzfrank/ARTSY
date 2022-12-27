import React from 'react';
import Image from 'next/image';
import style from '../styles/Shipping.module.css';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from '../redux/features/cartSlice';

export default function ShippingCartSmall() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.price;
  }, 0);
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
              <p onClick={() => dispatch(decreaseCount({ id }))}>-</p>
              <p>1</p>
              <p onClick={() => dispatch(increaseCount({ id }))}>+</p>
            </div>
          </div>
        </div>
        <div className={style.shippingClose}>
          <i
            className="uil uil-times-circle"
            onClick={() => dispatch(removeFromCart({ id }))}
          ></i>
          <p>$35.50</p>
        </div>
      </div>
    </div>
  );
}
