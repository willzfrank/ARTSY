import React from 'react';
import HeadComponent from '../app/Head';
import {
  CartComponent,
  CheckoutBox,
  MarketplaceLink,
  Navbar,
} from '../component';
import style from '../styles/Cart.module.css';
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../redux/features/basketSlice';
import Image from 'next/image';
import Link from 'next/link';

export default function Cart() {
  const [groupedItemsInBasket, setGroupedItemsInBasket] = React.useState(
    {} as { [key: string]: Product[] }
  );
  const items = useSelector(selectBasketItems);

  React.useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {} as { [key: string]: Product[] });

    setGroupedItemsInBasket(groupedItems);
  }, [items]);
  return (
    <div>
      <HeadComponent />
      <Navbar />

      {items.length > 0 ? (
        <>
          <div className={style.marketLinkBox}>
            <div className={style.marketLink}>
              <div className={style.marketLinkContent}>
                <p className={style.marketLinkStyling}>Shopping cart</p>
                <p className={style.cartHover}>Shipping details</p>
                <p className={style.cartHover}>Payment details</p>
              </div>
            </div>
          </div>
          {items.length > 0 && (
            <div>
              {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                <CartComponent key={key} items={items} id={key} />
              ))}
            </div>
          )}

          <CheckoutBox items={items} />
        </>
      ) : (
        <div className={style.emptyCartBox}>
          <Image
            src="/emptycart.png"
            alt="empty cart "
            width={255}
            height={231}
          />
          <h2 className={style.emptyCartTitle}>
            <span>Oops! Your basket is empty!</span>
            <span>Looks like you haven`t added </span>
            <span>anything to your cart yet</span>
          </h2>
          <Link href="/MarketPlace">
            <button className={style.emptyCartBtn}>START SHOPPING</button>
          </Link>
        </div>
      )}
    </div>
  );
}
