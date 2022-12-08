import React from 'react';

import style from '../styles/Error404.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Error404 = () => {
  return (
    <div className={style.errorContainer}>
      <Image
        src="/95483df50a0a3324c4cf9ccb1094b825.webp"
        alt=""
        width={300}
        height={300}
        className={style.image}
      />
      <div className={style.errorBox}>
        <h1>Do not worry we understand, we do get lost too sometimes.</h1>
        <h4>This page you requested could not be found.</h4>
        <h4>But we can guide you home !</h4>
        <button className={style.button}>
          <Link href="/" className="link">
            GO HOME
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Error404;
