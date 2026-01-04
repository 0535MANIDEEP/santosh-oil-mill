
import React from 'react';
import { MessageCircle, Scale, Heart, ShoppingBag } from 'lucide-react';
import styles from './WhatsAppEnquiry.module.css';
import { BUSINESS_INFO } from '@/data';

const ENQUIRIES = [
    {
        title: "Place an Order",
        desc: "Ask for prices or order fresh oil",
        icon: ShoppingBag,
        template: "Namaste Sridhar garu, naku oil order kavalali. Today's price list pampandi. Me daggara eh oils dorukutayi? Confirm cheste order details pedutanu. Thanks!"
    },
    {
        title: "Custom Extraction",
        desc: "Bring your seeds & get pure oil",
        icon: Scale,
        template: "Namaste Sridhar garu, naku custom extraction gurinchi details kavalali. Memu maa daggara unna seeds testamu, meeru Ganuga lo oil extract chesi istara? extraction charges entha? Please inform me."
    },
    {
        title: "Health Enquiry",
        desc: "Ask about benefits of Ganuga oil",
        icon: Heart,
        template: "Namaste Sridhar garu, Cold pressed oils valla benefits emiti? Refined oil kante wood pressed oil best ah? Maa health doubts konchem clear chestara. Thanks."
    }
];

const WhatsAppEnquiry = () => {
    const openWhatsApp = (template: string) => {
        const encodedText = encodeURIComponent(template);
        window.open(`https://wa.me/${BUSINESS_INFO.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodedText}`, "_blank");
    };

    return (
        <section className={styles.section}>
            <div className="l-container">
                <div className="l-stack" style={{ alignItems: 'center' }}>
                    <span className="section-tag" style={{ color: 'var(--brand-accent)' }}>Quick Enquiry</span>
                    <h2 style={{ color: 'white', fontSize: 'var(--text-lg)' }}>How can we help you today?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px' }}>
                        Choose an option below to chat with us instantly on WhatsApp.
                        Safe, pure, and traditional oils from Shankarpally.
                    </p>
                </div>

                <div className={styles.grid}>
                    {ENQUIRIES.map((item, idx) => (
                        <div key={idx} className={styles.optionCard} onClick={() => openWhatsApp(item.template)}>
                            <div className={styles.iconWrapper}>
                                <item.icon size={24} />
                            </div>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.desc}>{item.desc}</p>
                            <div className={styles.btn}>
                                <MessageCircle size={16} /> Chat on WhatsApp
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatsAppEnquiry;
