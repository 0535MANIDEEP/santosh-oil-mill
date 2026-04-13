
"use client";

import React from "react";
import { Phone, MapPin, Clock, ArrowUpRight, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/data";
import styles from "./ContactFooter.module.css";

const ContactFooter = () => {
    return (
        <footer id="contact" className={styles.footer}>
            <div className="l-container">
                <div className={styles.grid}>
                    {/* Brand Info */}
                    <div className={styles.column}>
                        <h3 className={styles.title}>{BUSINESS_INFO.name}</h3>
                        <p className={styles.text}>
                            Authentic cold-pressed oils maintained by Sridhar.
                            Preserving nature's nutritional signature for your family.
                        </p>
                    </div>

                    {/* Quick Access */}
                    <div className={styles.column}>
                        <span className={styles.label}>Contact Us</span>
                        <a href={`tel:${BUSINESS_INFO.contact.phone.replace(/\s/g, '')}`} className={styles.link}>
                            <Phone size={18} className="text-secondary" />
                            <strong>{BUSINESS_INFO.contact.phone}</strong>
                        </a>
                        <a href={`https://wa.me/${BUSINESS_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" className={styles.link} style={{ color: '#25D366' }}>
                            <MessageCircle size={18} />
                            <span>Chat on WhatsApp</span>
                        </a>
                        <div className={styles.link}>
                            <Clock size={18} className="text-secondary" />
                            <span>Daily: 8 AM - 8 PM</span>
                        </div>
                    </div>

                    {/* Location */}
                    <div className={styles.column}>
                        <span className={styles.label}>Visit Our Mill</span>
                        <address className={styles.address}>
                            <div className="l-flex" style={{ alignItems: 'flex-start', gap: '8px' }}>
                                <MapPin size={18} style={{ color: 'var(--brand-secondary)', flexShrink: 0, marginTop: '4px' }} />
                                <span>{BUSINESS_INFO.contact.address}</span>
                            </div>
                        </address>
                        <a
                            href={BUSINESS_INFO.contact.mapUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={styles.link}
                            style={{ color: 'var(--brand-primary)', fontWeight: 600, marginTop: '8px' }}
                        >
                            Open in Google Maps <ArrowUpRight size={16} />
                        </a>
                    </div>

                    {/* Trust Badge */}
                    <div className={styles.column}>
                        <span className={styles.label}>Our Promise</span>
                        <div className={styles.badge}>
                            <p className={styles.quote}>
                                "Zero Palm Oil. Zero Preservatives. Pure extraction from sundried seeds only."
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p className={styles.legal}>
                        © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
                    </p>
                    <div className="l-flex" style={{ gap: '24px' }}>
                        <span className={styles.legal}>Shankarpally's Trusted Mill</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ContactFooter;
