
import React from 'react';
import styles from './Header.module.css';
import { BUSINESS_INFO } from '@/data';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="l-container">
        <nav className={styles.nav}>
          <a href="/" className={styles.logo}>
            <span className={styles.brandName}>{BUSINESS_INFO.name}</span>
            <span className={styles.location}>{BUSINESS_INFO.location}</span>
          </a>

          <ul className={styles.menu}>
            <li><a href="#products" className={styles.menuLink}>Products</a></li>
            <li><a href="#visit" className={styles.menuLink}>Visit Us</a></li>
            <li><a href="#about" className={styles.menuLink}>Our Process</a></li>
            <li><a href="#contact" className={styles.menuLink}>Contact</a></li>
          </ul>

          <div className={styles.cta}>
            <a
              href={`tel:${BUSINESS_INFO.contact.phone.replace(/\s/g, '')}`}
              className={styles.callBtn}
            >
              Call Sridhar: {BUSINESS_INFO.contact.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
