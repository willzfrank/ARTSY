import React from 'react';
import HeadComponent from '../../app/Head';
import { CartExplore, Directory, Navbar } from '../../component';
import { AddCart, CartImageBox } from '../../sections';

export default function Explore() {
  return (
    <div>
      <HeadComponent />
      <Navbar />
      <Directory />
      <AddCart />
      <CartExplore />
      {/* <CartImageBox /> */}
    </div>
  );
}
