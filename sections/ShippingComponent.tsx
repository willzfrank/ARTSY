import React from 'react';
import { ShippingForm } from '../component';
import style from '../styles/Shipping.module.css';

export default function ShippingComponent() {
  return (
    <div className={style.shippingComponent}>
      <div className={style.shippingComponent1}>
        <ShippingForm />
      </div>
    </div>
  );
}
