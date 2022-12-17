import style from '../styles/LeftMarket.module.css';
import { useState } from 'react';

export const MarketCategory = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <h2 className={style.categoryTitle}>
        <i className="uil uil-sliders-v-alt"></i> Filter
      </h2>
      <hr className={style.hrCategory} />
      <div>
        <h2 className={style.categorySubTitle} onClick={toggleDropdown}>
          By category{' '}
          <i className={`uil uil-angle-up ${isOpen && 'arrowOpen'}`}></i>
        </h2>
        <div>
          {isOpen && (
            <div className={style.checkmarkContainer}>
              <label htmlFor="" className={style.categoryContainer}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className={style.checkmarkBox}
                />
                <span className={style.checkmark}></span>
                Editorials
              </label>
              <label htmlFor="" className={style.categoryContainer}>
                <input type="checkbox" name="" id="" />
                <span className={style.checkmark}></span>
                Fashion
              </label>
              <label htmlFor="" className={style.categoryContainer}>
                <input type="checkbox" name="" id="" />
                <span className={style.checkmark}></span>
                Optics
              </label>
              <label htmlFor="" className={style.categoryContainer}>
                <input type="checkbox" name="" id="" />
                <span className={style.checkmark}></span>
                Art & Museum
              </label>
              <label htmlFor="" className={style.categoryContainer}>
                <input type="checkbox" name="" id="" />
                <span className={style.checkmark}></span>
                Nature
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
