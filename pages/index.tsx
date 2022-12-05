import HeadComponent from '../app/Head';

import styles from '../styles/Home.module.css';
import Homepage from './Home';
import MarketPlace from './MarketPlace';

export default function Home() {
  return (
    <div>
      <HeadComponent />
      <Homepage />
    </div>
  );
}
