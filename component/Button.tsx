import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../redux/features/basketSlice';
import style from '../styles/RightMarket.module.css';

type Props = {
  product: Product;
};

const Button = (props: Props) => {
  const [isButtonClicked, setIsButtonClicked] = React.useState(true);

  const dispatch = useDispatch();
  const addItemToBasket = (product: Product) => {
    if (isButtonClicked) {
      setIsButtonClicked(false);
      dispatch(addToBasket(product));
      toast.success(`${product.name} added to basket`, {
        position: 'bottom-center',
      });
    }
  };

  return (
    <div onClick={() => addItemToBasket(props.product)}>
      <div className={style.marketCartIconBox}>
        <i className="uil uil-shopping-cart-alt"></i>
      </div>
    </div>
  );
};

export default Button;
