/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from '/app/api/styles/logo.module.scss';

const Logo = () => (
  <Link href="/">
    <img src="../../../public/img/logo.svg" alt="logo" className={styles.logo} />
  </Link>
);
export default Logo;
