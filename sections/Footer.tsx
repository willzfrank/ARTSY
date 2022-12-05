import { FooterSubscription } from '../component';
import style from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <FooterSubscription />
      <div className={style.footer}>
        <h2 className={style.footerTitle}>ARTSY.</h2>

        <ul className={style.footerListContainer}>
          <li className={style.footerListText}>Home</li>
          <li className={style.footerListText}>Marketplace</li>
          <li className={style.footerListText}>Auctions</li>
          <li className={style.footerListText}>Drops</li>
        </ul>

        <ul className={style.footerListContainer}>
          <li className={style.footerListText}>Blog</li>
          <li className={style.footerListText}>Wallets</li>
          <li className={style.footerListText}>Rates</li>
          <li className={style.footerListText}>High bids</li>
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
