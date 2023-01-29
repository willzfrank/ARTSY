import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import HeadComponent from '../../app/Head';
import { CartExplore, Directory, Navbar } from '../../component';
import { AddCart, CartImageBox } from '../../sections';
import { useRouter } from 'next/router';

type MarketPlaceProps = {
  product: Product[];
};

export const getStaticProps: GetStaticProps<MarketPlaceProps> = async (
  context
) => {
  const { products } = await import('../../data/products');
  const product = products.find((p) => p.id === context.params.id);
  console.log(product);
  return { props: { product } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { products } = await import('../../data/products');
  const paths = products.map((product) => ({
    params: { id: product.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default function Explore({ product }: MarketPlaceProps) {
  return (
    <div>
      <HeadComponent />
      <Navbar />
      <Directory />
      <AddCart product={product} />
      <CartExplore />
      {/* <CartImageBox /> */}
    </div>
  );
}
