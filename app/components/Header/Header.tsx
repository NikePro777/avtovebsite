import { Link } from 'react-scroll';
import styles from '../../api/styles/header.module.scss';
import Logo from '../Logo/Logo';

const Header = () => {
  const spy = true; // при перезагрузки страницы он вернет на место прокрутки
  const smooth = true;
  const offset = 140;
  const duration = 500;

  return (
    <header>
      <div className={`container ${styles.header__container}`}>
        <Logo />
        <nav className={styles.header__nav}>
          <ul className={styles.header__nav__list}>
            <li className={styles.header__nav__list__item}>
              о нас
              {/* <Link
                href="/"
                to="about"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
                className={styles.header__nav__list__item__link}>
                О нас
              </Link> */}
            </li>
            <li className={styles.header__nav__list__item}>
              {' '}
              о вас
              {/* <Link
                href="/"
                to=""
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
                className={styles.header__nav__list__item__link}>
                Not О нас
              </Link> */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
