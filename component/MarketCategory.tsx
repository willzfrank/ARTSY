import style from '../styles/LeftMarket.module.css';

export const MarketCategory = () => {
  return (
    <div>
      <h2 className={style.categoryTitle}>
        <i className="uil uil-sliders-v-alt"></i> Filter
      </h2>
      <hr className={style.hrCategory} />
      <div>
        <h2 className={style.categorySubTitle}>
          By category <i className="uil uil-angle-up"></i>
        </h2>
        <div>
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
        </div>
      </div>
    </div>
  );
};
