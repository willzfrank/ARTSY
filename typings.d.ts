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
  quantity: number;
};

declare module 'react-reveal/Bounce';

// TYPE FOR DROPS PAGE
type Drop = {
  id: string;
  title: string;
  creator: string;
  desc: string;
  img: string;
  active: string;
  auction: {
    time: string;
    date: string;
  };
  date: {
    day: number;
    month: string;
    time: string;
    timezone: string;
  };
};

type DropsProps = {
  drops: Drop[];
};

// TYPE FOR AUCTION
type Auction = {
  id: string;
  url: string;
};

type Bid = {
  current: {
    eth: number;
  };
  highest: {
    eth: number;
  };
  url: string;
  id: string;
  name: string;
  creator: string;
  date: {
    day: number;
    month: number;
    year: number;
  };
};

type AuctionProps= {
  auction: Auction[];
  bids: Bid[];
}
