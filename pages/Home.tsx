import { UpcomingAuction } from '../component';
import HeroSwiper from '../component/HeroSwiper';
import Navbar from '../component/Navbar';
import { Creators, Footer, HeroHome, SectionListComponent } from '../sections';
import Featured from '../sections/Featured';

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <HeroHome />
      <HeroSwiper />
      <Featured />
      <UpcomingAuction />
      <SectionListComponent />
      <Creators />
      <Footer />
    </div>
  );
}
