import styled from '../styles/MarketPlace.module.css';

const SearchComponentMarket = () => {
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
        <p className={styled.marketPlaceSortResult}>See 1-6 of 15 results</p>
        <div className={styled.marketPlaceSortContent}>
          <p>Sort by</p>
          <i className="uil uil-angle-down"></i>
        </div>
      </div>
    </div>
  );
};

export default SearchComponentMarket;
