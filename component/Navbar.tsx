'use client';

import Link from 'next/link';

import styled from '../styles/Navbar.module.css';

const Navbar = () => (
  <nav className={styled.nav}>
    <h1>ARTSY.</h1>

    <ul className={`${styled.navCenterList} ${styled.gap47}`}>
      <li className={styled.navList}>
        <Link href="/">Home</Link>
      </li>
      <li className={styled.navList}>
        <a href="/MarketPlace/index.tsx">Marketplace</a>
      </li>
      <li className={styled.navList}>
        <a href="/Auction/index.tsx">Auctions</a>
      </li>
      <li className={styled.navList}>
        <Link href="/Drops">Drop</Link>
      </li>
    </ul>

    <ul className={`${styled.navCenterList} ${styled.gap10}`}>
      <li className={styled.navListIcon}>
        <i className="uil uil-search"></i>
      </li>
      <li className={styled.navListIcon}>
        <i className="uil uil-shopping-cart-alt"></i>
      </li>
      <li className={styled.navListIcon}>
        <i className="uil uil-bell"></i>
      </li>
    </ul>
  </nav>
);

export default Navbar;
