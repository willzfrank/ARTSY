import Head from 'next/head';
import React from 'react';
import { Navbar } from '../component';
import { PaymentComponent } from '../sections';
import styled from '../styles/Stepper.module.css';

export default function Shipping() {
  return (
    <div>
      <Head>
        <title>Payment - Checkout Page</title>
        <meta
          name="description"
          content="Make a secure payment on our checkout page."
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
      <div className={styled.cartLinkBox}>
        <div className={styled.cartLink}>
          <div className={styled.cartLinkContent}>
            <p className={styled.cartHover}>Shopping cart</p>
            <p className={styled.cartHover}>Shipping details</p>
            <p className={styled.cartLinkStyling}>Payment details</p>
          </div>
        </div>
      </div>
      <PaymentComponent />
    </div>
  );
}
