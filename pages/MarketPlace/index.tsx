import HeadComponent from '../../app/Head';
import { Navbar, SearchComponentMarket } from '../../component';
import { LeftMarrketPlace, RightMarket } from '../../sections';
import styled from '../../styles/MarketPlace.module.css';

const MarketPlace = () => {
  return (
    <div>
      <HeadComponent />
      <Navbar />
      <SearchComponentMarket />
      <div className={styled.padding}>
        <LeftMarrketPlace />
        <RightMarket />
      </div>
    </div>
  );
};

export default MarketPlace;
