import { MarketImage } from '../component';
import style from '../styles/RightMarket.module.css';

function RightMarket() {
  return (
    <div className={style.rightMarketMain}>
      <MarketImage />
      <MarketImage />
      <MarketImage />
      <MarketImage />
      <MarketImage />
      <MarketImage />
    </div>
  );
}

export default RightMarket;
