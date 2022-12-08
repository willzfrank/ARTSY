import style from '../styles/Footer.module.css';

export default function FooterSubscription() {
  return (
    <div className={style.Subscription}>
      <h2>NEWSLETTER</h2>
      <p>Subscribe to get daily updates on new drops & exciting deals </p>
      <div className={style.mobileInputBar}>
        <input type="text" name="" id="" placeholder="ENTER YOUR EMAIL" />
        <button>SUBMIT</button>
      </div>
    </div>
  );
}
