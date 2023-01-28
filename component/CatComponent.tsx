import Image from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToBasket,
  increaseItem,
  removeAllFromBasket,
  removeFromBasket,
} from '../redux/features/basketSlice';
import { decrement, setCount } from '../redux/features/counterSlice';
import { RootState } from '../redux/store';
import style from '../styles/Cart.module.css';

type Props = {
  items: Product[];
  id: string;
};

export default function CatComponent({ id, items }: Props) {
  const item = useSelector(
    (state: RootState) =>
      state.basket.items.find((item) => item.id === id) || {
        id: '',
        name: '',
        creator: '',
        origin: '',
        views: '',
        price: { usd: 0, eth: 0 },
        size: { ft: 0 },
        url: '',
        quantity: 0,
      }
  );

  const dispatch = useDispatch();

  const addIncreaseItemInBasket = () => {
    dispatch(addToBasket({ ...item, quantity: (item.quantity || 0) + 1 }));
    toast.success(`One item of ${items[0].name} has been added to basket`, {
      position: 'bottom-center',
    });
  };

  const removeItemInBasket = () => {
    if (item.quantity > 1) {
      dispatch(removeFromBasket({ id }));
      toast.error(`One item of ${items[0].name} has been removed from basket`, {
        position: 'bottom-center',
      });
    } else {
      dispatch(removeFromBasket({ id }));
      toast.error(`${items[0].name} has been removed from basket`, {
        position: 'bottom-center',
      });
    }
  };

  const removeAllItemInBasket = () => {
    dispatch(removeAllFromBasket(id));
    toast.error(`${items[0].name} has been cleared from basket`, {
      position: 'bottom-center',
    });
  };

  const Total = () => {
    return `$${(item.quantity || 0) * items[0].price.usd}`;
  };
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
              <p onClick={removeItemInBasket}>-</p>
              <p>{item.quantity || 0}</p>
              <p onClick={addIncreaseItemInBasket}>+</p>
            </div>
          </div>
        </div>
        <div className={style.shoppingClose} onClick={removeAllItemInBasket}>
          <i className="uil uil-times-circle"></i>
          <p>{Total()}</p>
        </div>
      </div>
    </div>
  );
}
