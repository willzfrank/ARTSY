import style from '../styles/Footer.module.css';

export default function FooterSubscription() {
  return (
    <div className={style.Subscription}>
      <h2>NEWSLETTER</h2>
      <p>Subscribe to get daily updates on new drops & exciting deals </p>
      <div className={style.mobileInputBar}>
        <div className={style.mobileInput}>
          <input type="text" name="" id="" className={style.mobileInputMain} />
          <span>ENTER YOUR EMAIL</span>
          <i></i>
        </div>
        <button>SUBSCRIBE</button>
      </div>
    </div>
  );
}
