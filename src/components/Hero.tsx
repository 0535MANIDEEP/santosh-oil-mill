
import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import styles from './Hero.module.css';
import { BUSINESS_INFO } from '@/data';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.bgOverlay}>
                <img
                    src="/hero-bg.png"
                    alt="Natural Wood-Pressed Oil Extraction"
                    className={styles.bgImage}
                />
                <div className={styles.gradient} />
            </div>

            <div className="l-container">
                <div className={styles.heroContent}>
                    <span className={styles.tagline}>
                        EST. 2018 • Maintained by Sridhar
                    </span>
                    <h1 className={styles.title}>
                        Purity in Every <span className={styles.highlight}>Golden Drop</span>
                    </h1>
                    <p className={styles.description}>
                        Experience the natural taste and health benefits of cold-pressed oils.
                        Extracted using ancient wood-pressing methods with zero heat and no chemicals.
                    </p>

                    <div className={styles.actions}>
                        <a href="#products" className={styles.primaryBtn}>
                            Explore Our Oils <ArrowRight size={18} />
                        </a>
                        <a href="#visit" className={styles.secondaryBtn}>
                            Visit Our Mill
                        </a>
                        <a href={`tel:${BUSINESS_INFO.contact.phone.replace(/\s/g, '')}`} className={styles.secondaryBtn}>
                            <Phone size={18} /> {BUSINESS_INFO.contact.phone}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
