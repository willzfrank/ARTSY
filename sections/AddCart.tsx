// 'use client';

import Image from 'next/image';
import React from 'react';
import styled from '../styles/MarketPlace.module.css';
import { addToBasket } from '../redux/features/basketSlice';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

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
};

type Props = {
  product: Product;
};

export default function AddCart({ product }: Props) {
  const [isOpen, setOpen] = React.useState(false);
  const [isListingOpen, setListingOpen] = React.useState(false);
  const [isStatusOpen, setStatusOpen] = React.useState(false);

  const toggleDropdown = () => {
    setOpen(!isOpen);
    setListingOpen(false);
    setStatusOpen(false);
  };

  const toggleListingDropdown = () => {
    setListingOpen(!isListingOpen);
    setOpen(false);
    setStatusOpen(false);
  };

  const toggleStatusDropdown = () => {
    setStatusOpen(!isStatusOpen);
    setOpen(false);
    setListingOpen(false);
  };

  const dispatch = useDispatch();
  const addItemToBasket = (product: Product) => {
    dispatch(addToBasket(product));
    toast.success(`${product.name} added to basket`, {
      position: 'bottom-center',
    });
  };

  return (
    <div className={styled.AddCart}>
      <div className={styled.AddCartImage}>
        <Image
          src={product.url}
          width={500}
          height={926}
          alt="pics"
          className={styled.cartImage}
        />
      </div>
      <div className={styled.AddCartContainer}>
        <div className={styled.cartContainer}>
          <h2>{product.name}</h2>
          <p>
            <img src="/Vector.png" alt="vector img"></img>
            0.09
          </p>
        </div>
        <div className={styled.AddCartCreator}>
          <p>
            Creator : <span>{product.creator}</span>{' '}
          </p>
          <p>Made in Italy</p>
          <p>Total views: 1.7K views</p>
          <div className={styled.CartButton}>
            <i className={`${styled.cartIcon} uil uil-minus`}></i>
            <p>1</p>
            <i className={`${styled.cartIcon} uil uil-plus`}></i>
          </div>
          <div className={styled.CartButtonFav}>
            <button>
              Add to cart <i className="uil uil-arrow-right"></i>
            </button>
            <div className={styled.CartFav}>
              <i className="uil uil-heart"></i>
            </div>
          </div>
        </div>
        <div className={styled.CartOthers} onClick={toggleDropdown}>
          <h3>
            Description{' '}
            <i className={`uil uil-angle-down ${isOpen && 'arrowOpen'}`}></i>
          </h3>
          {isOpen && (
            <div>
              <p>{product.price.usd}</p>
            </div>
          )}
        </div>
        <div className={styled.CartOthers} onClick={toggleListingDropdown}>
          <h3>
            Listings{' '}
            <i
              className={`uil uil-angle-down ${isListingOpen && 'arrowOpen'}`}
            ></i>
          </h3>
          {isListingOpen && (
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo voluptas ipsum optio expedita possimus, harum autem
                quibusdam minus voluptate cum ipsam sit saepe, ullam recusandae
                doloribus dolorum corrupti. Quos, harum?
              </p>
            </div>
          )}
        </div>
        <div className={styled.CartOthers} onClick={toggleStatusDropdown}>
          <h3>
            Status{' '}
            <i
              className={`uil uil-angle-down ${isStatusOpen && 'arrowOpen'}`}
            ></i>
          </h3>
          {isStatusOpen && (
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo voluptas ipsum optio expedita possimus, harum autem
                quibusdam minus voluptate cum ipsam sit saepe, ullam recusandae
                doloribus dolorum corrupti. Quos, harum?
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
