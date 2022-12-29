import { GetServerSideProps } from 'next';
import HeadComponent from '../../app/Head';
import { Navbar, SearchComponentMarket } from '../../component';
import { Footer, LeftMarrketPlace, RightMarket } from '../../sections';
import styled from '../../styles/MarketPlace.module.css';

type Product = {
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

type MarketPlaceProps = {
  products: Product[];
};

export const getServerSideProps: GetServerSideProps<
  MarketPlaceProps
> = async () => {
  const { products } = await import('../../data/products');
  console.log(products);
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
      {/* <Footer /> */}
    </div>
  );
};

export default MarketPlace;
