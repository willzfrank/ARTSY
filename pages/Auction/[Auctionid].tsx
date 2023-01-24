import { style, StyledEngineProvider } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import HeadComponent from '../../app/Head';
import styled from '../../styles/Auction.module.css';
import { useRouter } from 'next/router';

type Auction = {
  id: string;
  url: string;
};

export default function Bid(data: Auction) {
  const router = useRouter();
  const Auctionid = router.query.Auctionid;

  console.log(Auctionid);
  return (
    <div>
      <HeadComponent />
      <div className={styled.BidContainer}>
        <div className={styled.BidLinkBox}>
          <p>
            Home/ Auctions/ <span> Live bid</span>
          </p>
        </div>
        <div className={styled.BidBox}>
          <div className={styled.BidBoxImg}>
            <Image src="" alt="" width={622} height={800} />
          </div>

          <div className={styled.BidBoxChatBox}>
            <div className={styled.BidBoxChatBody}>
              <div className={styled.BidBoxChatProfile}>
                <div className={styled.BidBoxChatProfileImageBox}>
                  <Image
                    src="/Ellipse 14.png"
                    alt="profile_img"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <p>Opeyemi Tiwalope</p>
                  <p>$45.00</p>
                </div>
              </div>

              <div className={styled.BidBoxChatProfile}>
                <div className={styled.BidBoxChatProfileImageBox}>
                  <Image
                    src="/Ellipse 15.png"
                    alt="profile_img"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <p>Opeyemi Tiwalope</p>
                  <p>$45.00</p>
                </div>
              </div>

              <div className={styled.BidBoxChatProfile}>
                <div className={styled.BidBoxChatProfileImageBox}>
                  <Image
                    src="/Ellipse 16.png"
                    alt="profile_img"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <p>Opeyemi Tiwalope</p>
                  <p>$45.00</p>
                </div>
              </div>

              <div className={styled.BidBoxChatProfile}>
                <div className={styled.BidBoxChatProfileImageBox}>
                  <Image
                    src="/Ellipse 17.png"
                    alt="profile_img"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <p>Opeyemi Tiwalope</p>
                  <p>$45.00</p>
                </div>
              </div>

              <div className={styled.BidBoxChatProfile}>
                <div className={styled.BidBoxChatProfileImageBox}>
                  <Image
                    src="/Ellipse 16.png"
                    alt="profile_img"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <p>Opeyemi Tiwalope</p>
                  <p>$45.00</p>
                </div>
              </div>

              <div className={styled.BidBoxChatProfile}>
                <div className={styled.BidBoxChatProfileImageBox}>
                  <Image
                    src="/Ellipse 15.png"
                    alt="profile_img"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <p>Opeyemi Tiwalope</p>
                  <p>$45.00</p>
                </div>
              </div>

              <div className={styled.BidBoxChatProfile}>
                <div className={styled.BidBoxChatProfileImageBox}>
                  <Image
                    src="/Ellipse 14.png"
                    alt="profile_img"
                    width={50}
                    height={50}
                  />
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
                <i className="uil uil-heart"></i>
              </div>
            </div>
          </div>
        </div>
        <h2>See upcoming drops</h2>
      </div>

      <div className={styled.mobileAuction}>
        <Image
          src="/Rectangle 260.png"
          className={styled.mobileAuctionImage}
          alt=""
          width={50}
          height={50}
        />
        <div className={styled.mobileAuctionContent}>
          <div className={styled.mobileTop}>
            <p className={styled.mobileTopText1}>Tag: Lost or Wither</p>
            <div className={styled.mobileTop2}>
              <p className={styled.mobileTopText2}> LIVE</p>
              <p className={styled.mobileTopText3}>
                <i className="uil uil-eye"></i> 295
              </p>
              <p className={styled.mobileTopText4}>
                <i className="uil uil-multiply"></i>
              </p>
            </div>
          </div>
          <div className={styled.mobileMiddle}>
            <p>Current bid : $45.00</p>
          </div>
          <div className={styled.mobileBottom}>
            <div className={styled.mobileBottom1}>
              <div className={styled.BidBoxChatProfile}>
                <div className={styled.BidBoxChatProfileImageBox}>
                  <Image
                    src="/Ellipse 14.png"
                    alt="profile_img"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <p>Opeyemi Tiwalope</p>
                  <p>$45.00</p>
                </div>
              </div>

              <div className={styled.BidBoxChatProfile}>
                <div className={styled.BidBoxChatProfileImageBox}>
                  <Image
                    src="/Ellipse 14.png"
                    alt="profile_img"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <p>Opeyemi Tiwalope</p>
                  <p>$45.00</p>
                </div>
              </div>

              <div className={styled.BidBoxChatProfile}>
                <div className={styled.BidBoxChatProfileImageBox}>
                  <Image
                    src="/Ellipse 14.png"
                    alt="profile_img"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <p>Opeyemi Tiwalope</p>
                  <p>$45.00</p>
                </div>
              </div>
            </div>
            <div>
              <div className={styled.mobileInputBox}>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Place a bid"
                  className={styled.mobileInput}
                />
                <i className={`${styled.mobileSend} uil uil-message`}></i>
                <i className="uil uil-heart"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
