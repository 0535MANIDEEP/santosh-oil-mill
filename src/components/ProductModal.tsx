
"use client";

import React from "react";
import { X, Phone, MessageCircle, ShieldCheck } from "lucide-react";
import styles from "./ProductModal.module.css";
import { Product, BUSINESS_INFO } from "@/data";

interface ProductModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
    if (!isOpen || !product) return null;

    const handleWhatsApp = () => {
        const text = `Namaste Sridhar garu, naku ${product.name} order kavalali.\n\nSize: [1L / 2L / 5L]\nAddress: [Enter Location]\n\nPlease confirm price and delivery details. Thanks!`;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/${BUSINESS_INFO.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodedText}`, "_blank");
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
                    <X size={20} />
                </button>

                <div className={styles.content}>
                    <div className={styles.imageArea}>
                        <div className="l-stack" style={{ alignItems: 'center' }}>
                            <product.icon size={120} />
                            <div className="l-flex" style={{ color: 'var(--brand-secondary)', fontSize: '0.75rem', fontWeight: 700, gap: '4px' }}>
                                100% NATURAL & PURE
                            </div>
                        </div>
                    </div>

                    <div className={styles.infoArea}>
                        <h2 className={styles.title}>{product.name}</h2>
                        <p className={styles.shortDesc}>{product.shortDesc}</p>

                        <div className={styles.fullDesc}>
                            {product.fullDesc}
                        </div>

                        <div className={styles.benefits}>
                            <h4 className={styles.benefitsTitle}>Key Benefits</h4>
                            <ul className={styles.benefitsList}>
                                {product.benefits.map((benefit, idx) => (
                                    <li key={idx} className={styles.benefitItem}>
                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-accent)', marginTop: '8px', flexShrink: 0 }} />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.actions}>
                            <button onClick={handleWhatsApp} className={styles.whatsappBtn}>
                                <MessageCircle size={20} /> Order on WhatsApp
                            </button>
                            <a href={`tel:${BUSINESS_INFO.contact.phone.replace(/\s/g, '')}`} className={styles.callBtn}>
                                <Phone size={20} /> Call Sridhar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
