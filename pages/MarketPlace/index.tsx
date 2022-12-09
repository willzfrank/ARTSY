import HeadComponent from '../../app/Head';
import { Navbar, SearchComponentMarket } from '../../component';
import { Footer, LeftMarrketPlace, RightMarket } from '../../sections';
import styled from '../../styles/MarketPlace.module.css';

const MarketPlace = () => {
  return (
    <div>
      <HeadComponent />
      <Navbar />
      <div className={`${styled.hidden} ${styled.Directory}`}>
        <p>
          Home/ Marketplace/<span> Editorials</span>
        </p>
        <p>Showing 1-5 of 18 results</p>
      </div>
      <SearchComponentMarket />
      <div className={styled.padding}>
        <LeftMarrketPlace />
        <RightMarket />
      </div>
      <Footer />
    </div>
  );
};

export default MarketPlace;
