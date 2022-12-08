import React from 'react';
import HeadComponent from '../app/Head';
import { MarketplaceLink, Navbar } from '../component';
import { ShippingComponent } from '../sections';

export default function Shipping() {
  return (
    <div>
      <HeadComponent />
      <Navbar />
      <MarketplaceLink />
      <ShippingComponent />
    </div>
  );
}
