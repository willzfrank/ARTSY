import HeadComponent from '../app/Head';
import styles from '../styles/Home.module.css';
import Homepage from './Home';

export default function Home() {
  return (
    <div>
      <HeadComponent />
      <Homepage />
    </div>
  );
}
