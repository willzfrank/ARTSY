import { GetServerSideProps } from 'next';
import HeadComponent from '../../app/Head';
import { Navbar, SearchComponentMarket } from '../../component';
import { Footer, LeftMarrketPlace, RightMarket } from '../../sections';
import styled from '../../styles/MarketPlace.module.css';

type ProductsProp = {
  id: string;
  name: string;
  creator: string;
  origin: string;
  views: string;
  price: {
    usd: number;
    eth: number;
  };
  size: {
    ft: number;
  };
  url: string;
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const data = await import('../../data/products.json');
//   console.log(data);
//   return {
//     props: {
//       data,
//     },
//   };
// };

const MarketPlace = ({ data }) => {
  return (
    <div>
      <HeadComponent />
      <Navbar />
      <div className={`${styled.hidden} ${styled.Directory}`}>
        <p>
          Home/ Marketplace/<span> Editorials</span>
        </p>
        <p>Showing 1-5 of 18 results{products.id}</p>
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
