// import Head from 'next/head';
import styles from '../app/styles/Home.module.css';
import Header from './components/Header/Header';

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Gaijam</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg" sizes="32x32" href="./public/img/logo.svg" />
      </Head> */}
      <Header />
      <main></main>
      <div className={styles.container}>
        <div className="background-animation"></div>
        <div id="ball-one"></div>
        <div id="ball-two"></div>
        <div id="ball-three"></div>
      </div>
    </>
  );
}
