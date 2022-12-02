'use client';

import styled from '../styles/Navbar.module.css';

const Navbar = () => (
  <nav className={styled.nav}>
    <h1>ARTSY.</h1>

    <ul className={`${styled.navCenterList} ${styled.gap47}`}>
      <li className={styled.navList}>Home</li>
      <li className={styled.navList}>Marketplace</li>
      <li className={styled.navList}>Auctions</li>
      <li className={styled.navList}>Drop</li>
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
