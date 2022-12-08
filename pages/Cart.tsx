import React from 'react';
import HeadComponent from '../app/Head';
import {
  CartComponent,
  CheckoutBox,
  MarketplaceLink,
  Navbar,
} from '../component';

export default function Cart() {
  return (
    <div>
      <HeadComponent />
      <Navbar />
      <MarketplaceLink />
      <CartComponent />
      <CartComponent />
      <CartComponent />
      <CheckoutBox />
    </div>
  );
}
