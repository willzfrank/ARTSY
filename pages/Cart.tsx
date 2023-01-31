import React from 'react';
import { CartComponent, CheckoutBox, Navbar } from '../component';
import style from '../styles/Cart.module.css';
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../redux/features/basketSlice';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import styled from '../styles/Stepper.module.css';

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
      <Head>
        <title>Cart</title>
        <meta
          name="description"
          content="A shopping cart for an e-commerce website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon_io/android-chrome-512x512.png" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,300,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
      </Head>
      <Navbar />

      {items.length > 0 ? (
        <>
          <div className={styled.cartLinkBox}>
            <div className={styled.cartLink}>
              <div className={styled.cartLinkContent}>
                <p className={styled.cartLinkStyling}>Shopping cart</p>
                <p className={styled.cartHover}>Shipping details</p>
                <p className={styled.cartHover}>Payment details</p>
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
