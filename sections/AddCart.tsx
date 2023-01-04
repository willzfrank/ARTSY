import Image from 'next/image';
import React from 'react';
import styled from '../styles/MarketPlace.module.css';

export default function AddCart() {
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

  return (
    <div className={styled.AddCart}>
      <div className={styled.AddCartImage}>
        <Image
          src="/Rectangle Cart.png"
          width={500}
          height={926}
          alt="pics"
          className={styled.cartImage}
        />
      </div>
      <div className={styled.AddCartContainer}>
        <div className={styled.cartContainer}>
          <h2>Boolean Egyptian</h2>
          <p>
            <img src="/Vector.png" alt="vector img"></img>
            0.09
          </p>
        </div>
        <div className={styled.AddCartCreator}>
          <p>
            Creator : <span>Ali Dawa</span>{' '}
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo voluptas ipsum optio expedita possimus, harum autem
                quibusdam minus voluptate cum ipsam sit saepe, ullam recusandae
                doloribus dolorum corrupti. Quos, harum?
              </p>
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
