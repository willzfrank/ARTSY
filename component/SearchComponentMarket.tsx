import styled from '../styles/MarketPlace.module.css';
import React from 'react';
import style from '../styles/LeftMarket.module.css';

const SearchComponentMarket = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [isFilterOpen, setFilterOpen] = React.useState(false);

  const toggleDropdown = () => {
    setOpen(!isOpen);
  };

  const toggleFilterDropdown = () => {
    setFilterOpen(!isFilterOpen);
  };
  return (
    <div className={styled.marketPlace}>
      <div className={styled.marketPlaceSearch}>
        <i className={`${styled.marketPlaceIcon} uil uil-search`}></i>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className={styled.marketPlaceSearchInput}
        />
      </div>
      <div className={styled.marketPlaceSort}>
        <p className={`${styled.mobilehidden} ${styled.marketPlaceSortResult}`}>
          See 1-6 of 15 results
        </p>
        <div
          className={`${styled.hidden} ${styled.marketPlaceSortContent}`}
          onClick={toggleFilterDropdown}
        >
          <p>Filters</p>
          <i className={`uil uil-angle-down ${isOpen && 'arrowOpen'}`}></i>

          <div className={styled.filterDropdown}>
            {isFilterOpen && (
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
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className={style.checkmarkBox}
                  />
                  <span className={style.checkmark}></span>
                  Fashion
                </label>
                <label htmlFor="" className={style.categoryContainer}>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className={style.checkmarkBox}
                  />
                  <span className={style.checkmark}></span>
                  Optics
                </label>
                <label htmlFor="" className={style.categoryContainer}>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className={style.checkmarkBox}
                  />
                  <span className={style.checkmark}></span>
                  Art & Museum
                </label>
                <label htmlFor="" className={style.categoryContainer}>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className={style.checkmarkBox}
                  />
                  <span className={style.checkmark}></span>
                  Nature
                </label>
              </div>
            )}
          </div>
        </div>

        <div>
          <select className={style.price_select}>
            <option value="all">Sort by </option>
            <option value="all">All</option>
            <option value="below100">Below $100.00</option>
            <option value="100to150">$100.00 - $150.00</option>
            <option value="150to200">$150.00 - $200.00</option>
            <option value="above200">Above $200.00</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchComponentMarket;
