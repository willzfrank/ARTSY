import Image from 'next/image';
import React from 'react';
import style from '../styles/Upcoming.module.css';

export default function UpcomingAuction() {
  return (
    <div className={style.upcomingActionBox}>
      <div className={style.upcoming}>
        <div>
          <div className={style.upcomingHeader}>
            <h1>See Upcoming Auctions and Exhibitions</h1>
            <hr />
          </div>

          <div className={style.upcoming2}>
            <Image
              src="/Rectangle 91.png"
              width={320}
              height={300}
              alt=""
              className={style.upcomingImage}
            />

            <div className={style.upcoming3}>
              <p className={style.upcoming3Text1}>01</p>
              <div className={style.upComing4}>
                <p className={style.upComing4Text1}>
                  MONALISA REDEFINED IN STYLE.
                </p>
                <p className={style.upComing4Text2}>
                  Start on : 08:00 GTS . Monday{' '}
                </p>
                <p className={style.upComing4Text3}>
                  GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                  INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                  HIGHEST AND LOWEST BIDS.
                </p>
                <div className={style.Upcoming5}>
                  <p>See more</p>
                  <p>Set a reminder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.arrowContainerAuction}>
        <div className={style.AuctionarrowContainer}>
          <i className={`${style.ImageAuctionarrow} uil uil-angle-left`}></i>
        </div>
        <div className={style.AuctionarrowContainer}>
          <i className={`${style.ImageAuctionarrow} uil uil-angle-right`}></i>
        </div>
      </div>
    </div>
  );
}
