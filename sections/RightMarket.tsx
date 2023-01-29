import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { MarketImage } from '../component';
import { addToBasket } from '../redux/features/basketSlice';
import style from '../styles/RightMarket.module.css';
import React from 'react';
import Button from '../component/Button';

type Product = {
  id: string;
  name: string;
  creator: string;
  origin: string;
  views: string;
  price: {
    usd: number;
    eth: number;
  };
  size: {
    ft: number;
  };
  url: string;
  quantity: number;
};

type marketPlaceMainPropType = {
  products: Product[];
};

function RightMarket({ products }: marketPlaceMainPropType) {
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
    <div className={style.rightMarketMain}>
      {products.map((product) => (
        <div key={product.id}>
          <div className={style.MarketImage}>
            <Link href={`/MarketPlace/${product.id}`}>
              <div className={style.image}>
                <Image
                  src={product.url}
                  width={240}
                  height={280}
                  alt={product.name}
                  className={style.imageMain}
                />
              </div>
            </Link>
            <div className={style.marketCartIcon}>
              <div className={style.mobileFlex}>
                <h2 className={style.mobileFlexName}>{product.name}</h2>
                <h3>${product.price.usd}</h3>
              </div>

              <Button product={product} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RightMarket;
