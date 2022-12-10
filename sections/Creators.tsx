import React from 'react';
import { VerticalSwiper } from '../component';
import style from '../styles/Creator.module.css';
export default function Creators() {
  return (
    <div className={style.creatorBox}>
      <h1>TOP CREATORS OF THE WEEK</h1>
      <p>
        “Everything always looked better in black and white. Everything always
        as if it were the first time; there’s always more people in a black and
        white photograph. It just makes it seem that there were more people at a
        gig, more people at a football match, than with colour photography.
        Everything looks more exciting.”– Jack Lowden
      </p>
      {/* <div className={style.creatorBox2}>
        <h2>CIRCA</h2>
        <h1>1985</h1>
      </div>

      <VerticalSwiper /> */}
    </div>
  );
}
