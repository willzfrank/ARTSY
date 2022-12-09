import Image from 'next/image';
import image1 from '../public/Rectangle 299.png';
import profile1 from '../public/Ellipse 14.png';
import profile2 from '../public/Ellipse 15.png';
import profile3 from '../public/Ellipse 16.png';
import profile4 from '../public/Ellipse 17.png';
import profile5 from '../public/Ellipse 18.png';
import styled from '../styles/Featured.module.css';

type FeatureMainPropType = {
  styledClass: string;
  image: string;
};

function FeaturedProducts(props: FeatureMainPropType) {
  return (
    <div className={props.styledClass}>
      <div>
        <Image
          src={props.image}
          alt=""
          width={610}
          height={305}
          className={styled.FeaturedImage}
        />
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
            {/* <Image src={profile6} alt="" width={51} height={305} /> */}
          </div>
          <p className={styled.FeaturedProductText}>64 major creators</p>
          <div className={styled.arrowContainer}>
            {/* <i
              className={`${styled.FeaturedIcon} uil uil-arrow-circle-right`}
            ></i> */}
            <i className={`${styled.arrow} uil uil-arrow-right`}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
