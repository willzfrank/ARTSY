import Head from 'next/head';
import React from 'react';
import styled from '../styles/Stepper.module.css';
import { Navbar } from '../component';
import { ShippingComponent } from '../sections';

export default function Shipping() {
  return (
    <div>
      <Head>
        <title>Shipping Information</title>
        <meta
          name="description"
          content="Enter your shipping information for delivery of your products."
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
            <p className={styled.cartLinkStyling}>Shipping details</p>
            <p className={styled.cartHover}>Payment details</p>
          </div>
        </div>
      </div>
      <ShippingComponent />
    </div>
  );
}
