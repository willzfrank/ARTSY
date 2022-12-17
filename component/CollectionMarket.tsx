import style from '../styles/LeftMarket.module.css';
import { useState } from 'react';

export default function CollectionMarket() {
  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!isOpen);
  };
  return (
    <div>
      <h2 className={style.categorySubTitle} onClick={toggleDropdown}>
        Collection year{' '}
        <i className={`uil uil-angle-up ${isOpen && 'arrowOpen'}`}></i>
      </h2>
    </div>
  );
}
