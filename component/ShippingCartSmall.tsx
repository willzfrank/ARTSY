import React from 'react';
import Image from 'next/image';
import style from '../styles/Shipping.module.css';
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../redux/features/basketSlice';

export default function ShippingCartSmall() {
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
    <div className={style.shippingBox}>
      <div className={style.shippingContainer}>
        {Object.entries(groupedItemsInBasket).map(([key, items]) => (
          <div key={key}>
            <div className={style.shippingContentContainer}>
              <Image
                src={items[0].url}
                width={166}
                height={196}
                alt=""
                className={style.shippingImgContentContainer}
              />
              <div>
                <p className={style.shippingText1}>{items[0].name}</p>
                <p className={style.shippingText2}>{items[0].creator}</p>
                <p className={style.shippingText3}>
                  Size: <span>{`${items[0].size.ft} ft`}</span>
                </p>
                <div className={style.shippingCounter}>
                  {/* <p>-</p>
                  <p>1</p>
                  <p>+</p> */}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className={style.shippingClose}>
          {/* <i className="uil uil-times-circle"></i> */}
          <p>$35.50</p>
        </div>
      </div>
    </div>
  );
}
