import { GetStaticProps } from 'next';
import HeadComponent from '../../app/Head';
import { Navbar, SearchComponentMarket } from '../../component';
import { LeftMarrketPlace, RightMarket } from '../../sections';
import styled from '../../styles/MarketPlace.module.css';

type MarketPlaceProps = {
  products: Product[];
};

export const getStaticProps: GetStaticProps<MarketPlaceProps> = async () => {
  const { products } = await import('../../data/products');
  return {
    props: {
      products,
    },
  };
};

const MarketPlace = ({ products }: MarketPlaceProps) => {
  return (
    <div>
      <HeadComponent />
      <Navbar />
      <div className={`${styled.hidden} ${styled.Directory}`}>
        <p>
          Home/ Marketplace/<span> Editorials</span>
        </p>
        <p>Showing 1-5 of 18 results </p>
      </div>
      <SearchComponentMarket />
      <div className={styled.padding}>
        <LeftMarrketPlace />
        <RightMarket products={products} />
      </div>
      <div className={styled.rightMarketButtonBox}>
        <button className={styled.rightMarketButton}>See more</button>
      </div>
    </div>
  );
};

export default MarketPlace;
