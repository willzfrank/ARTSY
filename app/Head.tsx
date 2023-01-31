import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function HeadComponent() {
  return (
    <Head>
      <title>Artsy - Discover Unique Artworks and Artists</title>
      <meta
        name="description"
        content="Explore a curated selection of unique artworks and artists at Artsy. Find your next favorite piece of art today."
      />
      <link rel="icon" href="/favicon_io/android-chrome-512x512.png" />
      <link
        href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,300,400&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
      />
    </Head>
  );
}
