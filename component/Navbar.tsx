import React from 'react';
import { style } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import styled from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={styled.nav}>
      {isOpen && (
        <div className={styled.closeTab} id="nav-close">
          <div className={styled.absolute}>
            <div className={styled.mobilecloseTab}>
              <h2>ARTSY.</h2>
              <i
                className={`${styled.closetoggle} uil uil-times`}
                onClick={toggleMenu}
              ></i>
            </div>

            <ul className={`${styled.navCenterList} ${styled.mobilegap47}`}>
              <li className={styled.mobilenavList}>
                <Link href="/">Home</Link>
              </li>
              <li className={styled.mobilenavList}>
                <a href="/MarketPlace/index.tsx">Marketplace</a>
              </li>
              <li className={styled.mobilenavList}>
                <a href="/Auction/index.tsx">Auctions</a>
              </li>
              <li className={styled.mobilenavList}>
                <Link href="/Drops">Drop</Link>
              </li>
            </ul>
            <Image
              src="/68560398-white-message-icon-on-blue-web-button.webp"
              width={64}
              height={64}
              alt="live message"
              className={styled.mobilenavMessage}
            />
          </div>
        </div>
      )}

      <div className="nav__toggle" id="nav-toggle">
        <i
          className={`${styled.toggle} uil uil-align-center`}
          onClick={toggleMenu}
        ></i>
      </div>
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
        <li className={`${styled.navListIcon} ${styled.bell}`}>
          <i className="uil uil-bell"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
