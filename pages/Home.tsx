import Navbar from '../component/Navbar';
import { Footer, HeroHome, SectionListComponent } from '../sections';
import Featured from '../sections/Featured';

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <HeroHome />
      <Featured />
      <SectionListComponent />
      <Footer />
    </div>
  );
}
