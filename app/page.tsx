import styles from '../app/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="background-animation"></div>
      <div id="ball-one"></div>
      <div id="ball-two"></div>
      <div id="ball-three"></div>
    </div>
  );
}
