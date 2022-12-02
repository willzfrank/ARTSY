import styles from '../styles/Hero.module.css';

export default function HeroHome() {
  return (
    <header>
      <h1 className={styles.headerContainer}>
        Photography is poetry & beautiful untold stories
      </h1>
      <p className={styles.headerText}>
        Flip through more than 10,000 vintage shots, old photograghs, historic
        images and captures seamlessly in one place. Register to get top access.
      </p>
    </header>
  );
}
