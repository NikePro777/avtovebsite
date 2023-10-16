// import { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../Logo/Logo';
import styles from '../../styles/header.module.scss';
// import stylesMenu from '../../styles/mobileMenu.module.scss';

const Header = () => {
  const spy = true;
  const smooth = true;
  const offset = 140;
  const duration = 500;
  //   const currentMenuItemClass = isMobile ? stylesMenu.menu__item : styles.header__nav__list__item;

  //   const handleToggleMenu = () => {
  //     (document.querySelector('body') as HTMLBodyElement).classList.toggle('overflow-hidden');
  //     // setMenuOpen(!menuOpen);
  //   };

  //   const closeMenu = () => {
  //     (document.querySelector('body') as HTMLBodyElement).classList.remove('overflow-hidden');
  //     // setMenuOpen(false);
  //   };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <Logo />
        {/* {isMobile && (
          <button
            onClick={handleToggleMenu}
            className={`${styles.burger_menu} ${menuOpen ? styles.open : ''}`}>
            <span />
            <span />
            <span />
          </button>
        )} */}
        <nav className={`${styles.header__nav} `}>
          <ul className={`${styles.header__nav__list}`}>
            <li className={styles.header__nav__list__item}>
              <Link
                href="/"
                to="about"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
                className={styles.header__nav__list__item__link}
                // onClick={closeMenu}
              >
                Обо мне
              </Link>
            </li>
            {/* <li className={styles.header__nav__list__item}>
              <Link
                href="/"
                to="about"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
                className={styles.header__nav__list__item__link}
                // onClick={closeMenu}
              >
                Обо мне
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link
                href="/"
                to="about"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
                className={styles.header__nav__list__item__link}
                // onClick={closeMenu}
              >
                Обо мне
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link
                href="/"
                to="about"
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
                className={styles.header__nav__list__item__link}
                // onClick={closeMenu}
              >
                Обо мне
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
