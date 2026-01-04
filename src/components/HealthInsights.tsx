
import React from 'react';
import { Sparkles, Heart, ShieldCheck, Sun, Leaf, Award } from 'lucide-react';
import styles from './HealthInsights.module.css';
import { HEALTH_TIPS } from '@/data';

const icons = [Heart, ShieldCheck, Sun, Leaf, Award, Sparkles];

const HealthInsights = () => {
    return (
        <section id="insights" className={styles.section}>
            <div className="l-container">
                <div className={styles.header}>
                    <span className={styles.badge}>Health First</span>
                    <h2 style={{ fontSize: 'var(--text-lg)' }}>Why Wood-Pressed Oils Matter</h2>
                    <p>
                        Our traditional extraction methods don't just produce oil—they preserve life-giving nutrients
                        that modern processing destroys.
                    </p>
                </div>

                <div className={styles.grid}>
                    {HEALTH_TIPS.map((tip, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <div key={index} className={styles.card}>
                                <div className={styles.iconWrapper}>
                                    <Icon size={20} />
                                </div>
                                <p className={styles.tipText}>{tip}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HealthInsights;
