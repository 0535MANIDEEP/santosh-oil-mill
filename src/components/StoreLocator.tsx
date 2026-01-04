
import React from 'react';
import { MapPin, Clock, ExternalLink, Camera } from 'lucide-react';
import styles from './StoreLocator.module.css';
import { BUSINESS_INFO } from '@/data';

const StoreLocator = () => {
    // Search-based embed URL (no API key required)
    const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.5281215693498!2d78.1343047!3d17.4543294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbefa00baa2b81%3A0xe3d201c4d4da6f72!2sSanthosh%20Oil%20Mill!5e0!3m2!1sen!2sin!4v1767560972900!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`;

    return (
        <section id="visit" className={styles.section}>
            <div className="l-container">
                <div className={styles.layout}>
                    <div className={styles.details}>
                        <span className="section-tag">Visit Our Mill</span>
                        <h2 className={styles.title}>Come See the Purity</h2>
                        <p className={styles.text}>
                            We welcome you to visit our mill in Shankarpally. Watch Sridhar maintain
                            the traditional wood-pressing process live and experience the pure aroma
                            of freshly extracted oils.
                        </p>

                        <div className={styles.infoCard}>
                            <div className={styles.infoItem}>
                                <MapPin size={20} className={styles.icon} />
                                <div>
                                    <strong>Location</strong>
                                    <p style={{ fontSize: '0.875rem', margin: 0 }}>{BUSINESS_INFO.contact.address}</p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <Clock size={20} className={styles.icon} />
                                <div>
                                    <strong>Business Hours</strong>
                                    <p style={{ fontSize: '0.875rem', margin: 0 }}>Daily: 8:00 AM - 8:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href={BUSINESS_INFO.contact.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.galleryLink}
                        >
                            <Camera size={18} /> View Mill Photos & Videos on Google Maps <ExternalLink size={14} />
                        </a>
                    </div>

                    <div className={styles.mapContainer}>
                        <iframe
                            title="Santhosh Oil Mill Location"
                            src={mapEmbedUrl}
                            className={styles.mapFrame}
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StoreLocator;
