import Link from 'next/link';
import { SectionList } from '../component';

const SectionListComponent = () => {
  return (
    <div>
      <Link href="MarketPlace">
        <SectionList title="Explore marketplace" styling="borderTop" />
      </Link>
      <Link href="Auction">
        <SectionList title="See auctions " styling="sectionList" />
      </Link>
    </div>
  );
};

export default SectionListComponent;
