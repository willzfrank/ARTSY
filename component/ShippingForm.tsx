import React from 'react';
import style from '../styles/Shipping.module.css';
import { useRouter } from 'next/router';

export default function ShippingForm() {
  const router = useRouter();
  return (
    <div className={style.shippingForm}>
      <div className={style.shippingFormContent}>
        <label htmlFor="">Your email</label>
        <input
          type="email"
          name=""
          id=""
          placeholder="aanuoluwateenah@gmail.com"
        />
        <div className={style.shippingFormCheckbox}>
          <input type="checkbox" name="" id="" />
          <p>Get updates about new drops & exclusive offers</p>
        </div>
      </div>

      <div className={style.shippingFormContent}>
        <label htmlFor="">Your full name</label>
        <input type="text" name="" id="" placeholder="Anuoluwapo Bamisaye" />
      </div>

      <div className={style.shippingFormContent}>
        <label htmlFor="">Choose a wallet</label>
        <input type="text" name="" id="" placeholder="Debit card" disabled />
      </div>

      <div className={style.shippingFormContent}>
        <label htmlFor="">City</label>
        <input type="text" name="" id="" />
      </div>

      <div className={`${style.flex} ${style.shippingFormContent}`}>
        <div className={style.shippingFormContentMobile}>
          <label htmlFor="">Country</label>
          <input type="text" name="" id="" />
        </div>
        <div className={style.shippingFormContentMobile}>
          <label htmlFor="">Postal code</label>
          <input type="text" name="" id="" placeholder="001001" />
        </div>
      </div>

      <div className={style.shippingFormContent}>
        <label htmlFor="">Phone number</label>
        <input type="text" name="" id="" placeholder="0812 3456 785" />
      </div>
      <div
        className={style.shippingFormBtn}
        onClick={() => router.push('/Payment')}
      >
        Proceed to payment
      </div>
    </div>
  );
}
