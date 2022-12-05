import style from '../styles/LeftMarket.module.css';

export default function ArtistMarket() {
  return (
    <div>
      <h2 className={style.categorySubTitle}>
        By artist <i className="uil uil-angle-up"></i>
      </h2>
      <div>
        <p className={style.ArtistList}>All</p>
        <p className={style.ArtistList}>Below $100.00</p>
        <p className={style.ArtistList}>$100.00 -$150.00</p>
        <p className={style.ArtistList}>%150.00 - $200.00</p>
        <p className={style.ArtistList}> Above $200.00</p>
      </div>
    </div>
  );
}
