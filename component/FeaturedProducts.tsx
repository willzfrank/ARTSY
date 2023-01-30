import Image from 'next/image';
import image1 from '../public/Rectangle 299.png';
import profile1 from '../public/Ellipse 14.png';
import profile2 from '../public/Ellipse 15.png';
import profile3 from '../public/Ellipse 16.png';
import profile4 from '../public/Ellipse 17.png';
import profile5 from '../public/Ellipse 18.png';
import styled from '../styles/Featured.module.css';
import Link from 'next/link';

type FeatureMainPropType = {
  styledClass: string;
  image: string;
};

function FeaturedProducts({ styledClass, image }: FeatureMainPropType) {
  return (
    <div className={styledClass}>
      <div className={styled.MainFeaturedImage}>
        <Link href="/MarketPlace">
          <div className={`${styled.InnerFeaturedImage} inner-featured-image`}>
            <h2>
              View Products
              <div className={styled.arrowContainer}>
                <i className={`${styled.Imagearrow} uil uil-arrow-right`}></i>
              </div>
            </h2>
            <style jsx>{`
              .inner-featured-image {
                background-image: url('${image}');
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
              }
            `}</style>
          </div>
        </Link>
      </div>
      <div className={styled.mobileFeaturedProduct}>
        <h2 className={styled.FeaturedProductTitle}>The Boolean Egyptian</h2>
        <p className={styled.FeaturedProductText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor pur
        </p>
        <div className={styled.FeaturedProfileContainer}>
          <div className={styled.FeaturedImageContainer}>
            <Image
              src={profile1}
              alt=""
              width={45}
              height={45}
              className={styled.FeaturedProfileImg}
            />
            <Image
              src={profile2}
              alt=""
              width={45}
              height={45}
              className={styled.FeaturedProfileImg1}
            />
            <Image
              src={profile3}
              alt=""
              width={45}
              height={45}
              className={styled.FeaturedProfileImg2}
            />
            <Image
              src={profile4}
              alt=""
              width={45}
              height={45}
              className={styled.FeaturedProfileImg3}
            />
            <Image
              src={profile5}
              alt=""
              width={45}
              height={45}
              className={styled.FeaturedProfileImg4}
            />
          </div>
          <p className={styled.FeaturedProductText}>64 major creators</p>
          <Link href="/MarketPlace">
            <div className={styled.arrowContainer}>
              <i className={`${styled.arrow} uil uil-arrow-right`}></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
