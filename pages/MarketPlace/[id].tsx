import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import HeadComponent from '../../app/Head';
import { CartExplore, Directory, Navbar } from '../../component';
import { AddCart, CartImageBox } from '../../sections';
import { ParsedUrlQuery } from 'querystring';

type MarketPlaceProps = {
  product: Product[];
};

export const getStaticProps: GetStaticProps<MarketPlaceProps> = async ({
  params,
}) => {
  const { products } = await import('../../data/products');
  const id = (params as ParsedUrlQuery).id;
  const product = products.find((p) => p.id === id);
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
