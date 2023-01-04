import Image from 'next/image';
import React from 'react';
import style from '../styles/Drop.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Drop = {
  id: string;
  title: string;
  creator: string;
  desc: string;
  img: string;
  active: string;
  auction: {
    time: string;
    date: string;
  };
  date: {
    day: number;
    month: string;
    time: string;
    timezone: string;
  };
};

type DropComponentProps = {
  drops: Drop[];
};

const DropComponent: React.FC<DropComponentProps> = ({ drops }) => {
  const notify = () => toast('You will be notified in the next 6 hours');
  return (
    <div className={style.dropBox}>
      <ToastContainer />
      {drops.map((drop) => (
        <div className={style.dropContainer} key={drop.id}>
          <div className={style.dropTimeBox}>
            <Image
              src={`/${drop.img}`}
              alt=""
              width={600}
              height={400}
              className={style.dropImage}
            />
            <div className={style.dropTimeContainer}>
              <p className={style.dropTimeCount1}>{drop.auction.time}</p>
              <div className={style.dropTimeCount}>
                <p className={style.dropTimeCount2}>{drop.auction.date}</p>
                {drop.auction.time === 'Auction ended' ? (
                  <div className={style.viewBtn}>
                    <p>View</p>
                  </div>
                ) : (
                  <div className={style.joinBtn}>
                    <p> Join</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <div
              className={
                drop.active === 'upcoming'
                  ? style.dropContainerUpcoming
                  : drop.active === 'live now'
                  ? style.dropContainerLive
                  : style.dropContainerEnded
              }
            >
              <p>{drop.active}</p>
            </div>

            <p className={style.dropText1}>November 21 at 11 am WAT</p>
            <p className={style.dropText2}>{drop.title}</p>
            <p className={style.dropText3}>{drop.desc}</p>
            <p className={style.dropText4}>
              Creator : <span>{drop.creator}</span>
            </p>
            <p
              className={style.dropText5}
              onClick={
                drop.auction.time === 'Time remaining'
                  ? () => toast('You will be notified in the next few hours.')
                  : () => toast('Sorry, the auction has ended.')
              }
            >
              Get notified
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropComponent;
