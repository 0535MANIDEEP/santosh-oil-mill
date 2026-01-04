
import React from 'react';
import { Check, X, Info } from 'lucide-react';
import styles from './ComparisonSection.module.css';

const ComparisonSection = () => {
    const comparisonData = [
        {
            feature: "Processing",
            coldPressed: "Extracted at room temperature using traditional wood/stone press.",
            refined: "Extracted using high heat (>200°C) and chemical solvents like Hexane."
        },
        {
            feature: "Nutrient Profile",
            coldPressed: "Retains all natural Vitamins (E, K) and heart-healthy Antioxidants.",
            refined: "Most nutrients are lost during the high-heat deodorization process."
        },
        {
            feature: "Additives",
            coldPressed: "Zero chemicals, bleaching agents, or preservatives. 100% natural.",
            refined: "Contains bleaching agents, TBHQ, and artificial stabilizers."
        },
        {
            feature: "Aroma & Taste",
            coldPressed: "Natural, rich aroma and full-bodied nutty flavor.",
            refined: "Bland and scentless due to harsh chemical processing."
        }
    ];

    return (
        <section id="benefits" className={styles.section}>
            <div className="l-container">
                <div className={styles.header}>
                    <span className="section-tag" style={{ color: 'var(--brand-secondary)', fontWeight: 700, fontSize: 'var(--text-xs)', textTransform: 'uppercase', marginBottom: 'var(--space-2xs)', display: 'block' }}>Health Education</span>
                    <h2 style={{ fontSize: 'var(--text-lg)' }}>Cold Pressed vs Refined Oils</h2>
                    <p>
                        Understanding how your oil is extracted is key to your family's health.
                        Wood-pressing is a slow, natural process that preserves what nature intended.
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Healthy Side */}
                    <div className={`${styles.comparisonCard} ${styles.healthyCard}`}>
                        <h3 className={`${styles.cardTitle} ${styles.healthyTitle}`}>
                            <Check size={24} /> Cold Pressed (The Natural Way)
                        </h3>
                        <div className={styles.list}>
                            {comparisonData.map((item, idx) => (
                                <div key={idx} className={styles.item}>
                                    <span className={`${styles.featureLabel} ${styles.healthyLabel}`}>{item.feature}</span>
                                    <p className={styles.content}>{item.coldPressed}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Refined Side */}
                    <div className={`${styles.comparisonCard} ${styles.refinedCard}`}>
                        <h3 className={`${styles.cardTitle} ${styles.refinedTitle}`}>
                            <X size={24} /> Refined Oils (Industrial Way)
                        </h3>
                        <div className={styles.list}>
                            {comparisonData.map((item, idx) => (
                                <div key={idx} className={styles.item}>
                                    <span className={`${styles.featureLabel} ${styles.refinedLabel}`}>{item.feature}</span>
                                    <p className={styles.content}>{item.refined}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.infoBox}>
                    <Info className="text-secondary" size={24} style={{ flexShrink: 0, color: 'var(--brand-accent)' }} />
                    <p className={styles.infoText}>
                        <strong>Note:</strong> Pure cold pressed oil may appear slightly cloudy or have sediment.
                        This is a sign of purity, indicating that natural nutrients and fibers are still present.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
