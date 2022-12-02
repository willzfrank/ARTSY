import FeaturedProducts from '../component/FeaturedProducts';
import style from '../styles/Featured.module.css';

const Featured = () => {
  return (
    <div className={style.featuredMain}>
      <h2 className={style.featuredTitle}>Featured products</h2>
      <FeaturedProducts
        styledClass="FeaturedProductContainer"
        image="/Rectangle 299.png"
      />
      <FeaturedProducts
        styledClass="rowReverse"
        image="/Rectangle 299 (1).png"
      />
      <FeaturedProducts
        styledClass="FeaturedProductContainer"
        image="/Rectangle 299 (2).png"
      />
    </div>
  );
};

export default Featured;
