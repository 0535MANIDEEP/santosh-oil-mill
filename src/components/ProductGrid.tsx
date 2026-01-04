
import React from 'react';
import { Check } from 'lucide-react';
import styles from './ProductGrid.module.css';
import { PRODUCTS, Product } from '@/data';

interface ProductGridProps {
    onProductSelect: (product: Product) => void;
}

const ProductGrid = ({ onProductSelect }: ProductGridProps) => {
    return (
        <div id="products" className="l-section">
            <div className="l-container">
                <div className="l-stack" style={{ textAlign: 'center', marginBottom: 'var(--space-md)' }}>
                    <h2 style={{ fontSize: 'var(--text-lg)' }}>Our Cold Pressed Oils</h2>
                    <p style={{ margin: '0 auto' }}>
                        Freshly extracted in small batches to ensure the highest quality and nutritional value.
                    </p>
                </div>

                <div className={styles.grid}>
                    {PRODUCTS.map((product) => (
                        <div key={product.id} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <product.icon size={24} />
                            </div>
                            <h3 className={styles.productName}>{product.name}</h3>
                            <p className={styles.shortDesc}>{product.shortDesc}</p>

                            <ul className={styles.benefitsMenu}>
                                {product.benefits.slice(0, 2).map((benefit, i) => (
                                    <li key={i} className={styles.benefitItem}>
                                        <Check size={14} /> {benefit}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => onProductSelect(product)}
                                className={styles.selectBtn}
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductGrid;
