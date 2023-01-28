import { useRouter } from 'next/router';
import React from 'react';
import style from '../styles/Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { selectBasketTotal } from '../redux/features/basketSlice';

type Props = {
  items: Product[];
};

export default function CheckoutBox({ items }: Props) {
  const basketShippingFee = useSelector(selectBasketTotal);
  const subtotal = useSelector((state: RootState) => state.basket.subtotal);

  const basketTotal = () => {
    return subtotal + basketShippingFee;
  };

  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div className={style.checkBoxContainer}>
      <div className={style.checkBox}>
        <div onClick={() => router.push('/Shipping')}>Proceed to checkout</div>
        <p onClick={() => router.push('/MarketPlace')}>Continue shopping</p>
      </div>
      <div className={style.checkBoxPriceBox}>
        <div className={style.checkBoxPrice}>
          <p className={style.checkBoxPrice1}>Products in cart :</p>
          <p className={style.checkBoxPrice1}>Shipping : </p>
          <p className={style.checkBoxPrice1}>Total :</p>
        </div>
        <div className={style.checkBoxPrice}>
          <p className={style.checkBoxPrice2}>{items.length} items</p>
          <p className={style.checkBoxPrice2}>
            ${items.reduce((total, item) => total + item.price.usd, 0)}
          </p>
          <p className={style.checkBoxPrice2}>${basketTotal()}</p>
        </div>
      </div>
    </div>
  );
}
