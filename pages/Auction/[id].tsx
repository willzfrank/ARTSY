import Image from 'next/image';
import React from 'react';
import styled from '../../styles/Auction.module.css';

export default function Bid() {
  return (
    <div className={styled.BidContainer}>
      <div className={styled.BidLinkBox}>
        <p>
          Home/ Auctions/ <span> Live bid</span>
        </p>
      </div>
      <div className={styled.BidBox}>
        <div className={styled.BidBoxImg}>
          <Image src="" alt="" width={100} height={800} />
        </div>
        <div className={styled.BidBoxChatBox}>
          <div className={styled.BidBoxChatBody}>
            <div className={styled.BidBoxChatProfile}>
              <div className={styled.BidBoxChatProfileImageBox}>
                <Image src="" alt="profile_img" width={50} height={50} />
              </div>
              <div>
                <p>Opeyemi Tiwalope</p>
                <p>$45.00</p>
              </div>
            </div>

            <div className={styled.BidBoxChatProfile}>
              <div className={styled.BidBoxChatProfileImageBox}>
                <Image src="" alt="profile_img" width={50} height={50} />
              </div>
              <div>
                <p>Opeyemi Tiwalope</p>
                <p>$45.00</p>
              </div>
            </div>

            <div className={styled.BidBoxChatProfile}>
              <div className={styled.BidBoxChatProfileImageBox}>
                <Image src="" alt="profile_img" width={50} height={50} />
              </div>
              <div>
                <p>Opeyemi Tiwalope</p>
                <p>$45.00</p>
              </div>
            </div>

            <div className={styled.BidBoxChatProfile}>
              <div className={styled.BidBoxChatProfileImageBox}>
                <Image src="" alt="profile_img" width={50} height={50} />
              </div>
              <div>
                <p>Opeyemi Tiwalope</p>
                <p>$45.00</p>
              </div>
            </div>

            <div className={styled.BidBoxChatProfile}>
              <div className={styled.BidBoxChatProfileImageBox}>
                <Image src="" alt="profile_img" width={50} height={50} />
              </div>
              <div>
                <p>Opeyemi Tiwalope</p>
                <p>$45.00</p>
              </div>
            </div>

            <div className={styled.BidBoxChatProfile}>
              <div className={styled.BidBoxChatProfileImageBox}>
                <Image src="" alt="profile_img" width={50} height={50} />
              </div>
              <div>
                <p>Opeyemi Tiwalope</p>
                <p>$45.00</p>
              </div>
            </div>

            <div className={styled.BidBoxChatProfile}>
              <div className={styled.BidBoxChatProfileImageBox}>
                <Image src="" alt="profile_img" width={50} height={50} />
              </div>
              <div>
                <p>Opeyemi Tiwalope</p>
                <p>$45.00</p>
              </div>
            </div>
          </div>
          <div className={styled.BidBoxChatTextBox}>
            <p>Creator: Stormi Rylie</p>
            <div>
              <input type="text" name="" id="" placeholder="Place a bid" />
              heart
            </div>
          </div>
        </div>
      </div>
      <h2>See upcoming drops</h2>
    </div>
  );
}
