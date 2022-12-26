import styled from '@emotion/styled';
import Image from 'next/image';
import style from '../styles/RightMarket.module.css';

export default function MarketImage() {
  return (
    <div className={style.MarketImage}>
      <div className={style.image}>
        <Image
          src="/Rectangle 299 (1).png"
          width={240}
          height={280}
          alt="imageDesc"
          className={style.imageMain}
        />
      </div>
      <div className={style.mobileFlex}>
        <h2>PHILOMENA &#39;22</h2>
        <h3>$3.90</h3>
      </div>
    </div>
  );
}
