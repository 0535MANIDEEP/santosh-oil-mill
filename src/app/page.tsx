
"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import HealthInsights from "@/components/HealthInsights";
import ProductModal from "@/components/ProductModal";
import ContactFooter from "@/components/ContactFooter";
import ComparisonSection from "@/components/ComparisonSection";
import WhatsAppEnquiry from "@/components/WhatsAppEnquiry";
import StoreLocator from "@/components/StoreLocator";
import { Product, FEATURES } from "@/data";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      <Hero />
      <ProductGrid onProductSelect={handleProductSelect} />

      <section id="about" className="l-section">
        <div className="l-container">
          <div className="l-stack" style={{ textAlign: "center", marginBottom: "var(--space-md)", maxWidth: "800px", marginInline: "auto" }}>
            <span className="section-tag" style={{ color: "var(--brand-secondary)", fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>Why Santhosh Oil Mill?</span>
            <h2 style={{ fontSize: "var(--text-lg)" }}>Legacy of Purity</h2>
            <p className="text-muted leading-relaxed">
              We believe that good health starts in the kitchen. Our cold-pressed oils are
              extracted without heat or chemicals, preserving nature's original essence.
            </p>
          </div>

          <div className="l-grid l-grid-3">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="card" style={{ padding: "var(--space-sm)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", backgroundColor: "var(--color-surface)" }}>
                <div className="l-flex" style={{ width: '48px', height: '48px', backgroundColor: 'var(--color-bg)', color: 'var(--brand-primary)', borderRadius: 'var(--radius-sm)', justifyContent: 'center', marginBottom: 'var(--space-xs)' }}>
                  <feature.icon size={24} />
                </div>
                <h3 style={{ fontSize: 'var(--text-md)', marginBottom: 'var(--space-2xs)' }}>{feature.title}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', margin: 0 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ComparisonSection />
      <HealthInsights />
      <StoreLocator />
      <WhatsAppEnquiry />
      <ContactFooter />

      {/* Overlays */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}
