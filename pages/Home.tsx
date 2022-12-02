import Navbar from '../component/Navbar';
import { HeroHome } from '../sections';
import Featured from '../sections/Featured';

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <HeroHome />
      <Featured />
    </div>
  );
}
