import { FooterSubscription } from '../component';
import style from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <FooterSubscription />
      <div className={style.footer}>
        <h2 className={style.footerTitle}>ARTSY.</h2>

        <ul className={style.footerListContainer}>
          <li className={style.footerListText}>
            <a href="Home.tsx">Home</a>
          </li>

          <li className={style.footerListText}>
            <a href="MarketPlace/index.tsx">Marketplace</a>
          </li>
          <li className={style.footerListText}>
            <a href="Auction/index.tsx">Auctions</a>
          </li>
          <li className={style.footerListText}>
            <a href="Drops.tsx">Drops</a>
          </li>
        </ul>

        <ul className={style.footerListContainer}>
          <li className={style.footerListText}>
            <a href="404.tsx"></a>
            Blog
          </li>
          <li className={style.footerListText}>
            <a href="404.tsx"></a>Wallets
          </li>
          <li className={style.footerListText}>
            <a href="404.tsx"></a>Rates
          </li>
          <li className={style.footerListText}>
            <a href="404.tsx"></a>High bids
          </li>
        </ul>

        <ul className={style.footerListContainer}>
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
