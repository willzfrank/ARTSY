import Image from 'next/image';
import React from 'react';
import style from '../styles/Drop.module.css';

export default function DropComponent() {
  return (
    <div className={style.dropBox}>
      <div className={style.dropContainer}>
        <div className={style.dropTimeBox}>
          <Image
            src="/Rectangle 87.png"
            alt=""
            width={680}
            height={440}
            className={style.dropImage}
          />
          <div className={style.dropTimeContainer}>
            <p className={style.dropTimeCount1}>Time remaining</p>
            <div className={style.dropTimeCount}>
              <p className={style.dropTimeCount2}>06 hrs : 45 min : 22 s</p>
              <div className={style.dropTimeCount3}>
                <p>Join</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={style.dropContainerTop}>
            <p>UPCOMING</p>
          </div>
          <p className={style.dropText1}>November 21 at 11 am WAT</p>
          <p className={style.dropText2}>Eyo : Eko For Show</p>
          <p className={style.dropText3}>
            Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis
            vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.
          </p>
          <p className={style.dropText4}>
            Creator : <span>Aliya Minat</span>
          </p>
          <p className={style.dropText5}>Get notified</p>
        </div>
      </div>
    </div>
  );
}
