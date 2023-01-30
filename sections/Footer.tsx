import Link from 'next/link';
import { FooterSubscription } from '../component';
import style from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <FooterSubscription />
      <div className={style.footer}>
        <h2 className={`${style.hidden} ${style.footerTitle}`}>ARTSY.</h2>

        <ul className={`${style.hidden} ${style.footerListContainer}`}>
          <li className={style.footerListText}>
            <Link href="/">Home</Link>
          </li>

          <li className={style.footerListText}>
            <Link href="/MarketPlace">Marketplace</Link>
          </li>
          <li className={style.footerListText}>
            <Link href="/Auction">Auctions</Link>
          </li>
          <li className={style.footerListText}>
            <Link href="/Drops">Drops</Link>
          </li>
        </ul>

        <ul className={`${style.hidden} ${style.footerListContainer}`}>
          <li className={style.footerListText}>
            <Link href="/construction">Blog</Link>
          </li>
          <li className={style.footerListText}>
            <Link href="/construction">Wallets</Link>
          </li>
          <li className={style.footerListText}>
            <Link href="/construction">Rates</Link>
          </li>
          <li className={style.footerListText}>
            <Link href="/construction">High bids</Link>
          </li>
        </ul>

        <ul className={style.footerListContainer}>
          <li className={style.mobilehidden}>REACH US</li>
          <li className={style.footerListText}>
            <i className="uil uil-envelope"></i> artsystudios@gmail.com
          </li>
          <li className={style.footerListText}>
            <i className="uil uil-map-marker"></i> Lagos, Nigeria.
          </li>
        </ul>
      </div>
      <p className={style.footerCopy}>
        Artsystudios © 2022. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
