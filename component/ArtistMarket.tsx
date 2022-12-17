import style from '../styles/LeftMarket.module.css';
import { useState } from 'react';

export default function ArtistMarket() {
  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!isOpen);
  };
  return (
    <div>
      <h2 className={style.categorySubTitle} onClick={toggleDropdown}>
        By artist{' '}
        <i className={`uil uil-angle-up ${isOpen && 'arrowOpen'}`}></i>
      </h2>
      {isOpen && (
        <div>
          <p className={style.ArtistList}>All</p>
          <p className={style.ArtistList}>Below $100.00</p>
          <p className={style.ArtistList}>$100.00 -$150.00</p>
          <p className={style.ArtistList}>%150.00 - $200.00</p>
          <p className={style.ArtistList}> Above $200.00</p>
        </div>
      )}
    </div>
  );
}
