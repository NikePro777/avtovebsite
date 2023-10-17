import Head from 'next/head';
import styles from '../app/api/styles/Home.module.css';

const Home = () => {
  return (
    <>
      <Head>
        <title>Gaijam</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg" sizes="32x32" href="./public/img/logo.svg" />
      </Head>

      {/* <main></main> */}

      <div className="background-animation">
        <div id="ball-one"></div>
        <div id="ball-two"></div>
        <div id="ball-three"></div>
      </div>
    </>
  );
};

export default Home;
