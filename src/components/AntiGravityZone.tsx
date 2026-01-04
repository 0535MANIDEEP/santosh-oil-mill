
"use client";

import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { Product, PRODUCTS, HEALTH_TIPS } from "@/data";
import { ArrowDown } from "lucide-react";

interface AntiGravityZoneProps {
    onProductSelect: (product: Product) => void;
}

const AntiGravityZone: React.FC<AntiGravityZoneProps> = ({ onProductSelect }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const requestRef = useRef<number | null>(null);

    const [bodies, setBodies] = useState<{ id: number; type: 'product' | 'tip'; label: string; x: number; y: number; angle: number }[]>([]);
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!containerRef.current || isMobile || !mounted) return;

        // Wait a frame to ensure containerRef has its final rendered size
        const initTimer = setTimeout(() => {
            if (!containerRef.current) return;

            const { clientWidth: width, clientHeight: height } = containerRef.current;
            if (width === 0 || height === 0) return;

            const Engine = Matter.Engine;
            const World = Matter.World;
            const Bodies = Matter.Bodies;
            const Mouse = Matter.Mouse;
            const MouseConstraint = Matter.MouseConstraint;

            const engine = Engine.create();
            engineRef.current = engine;
            engine.gravity.y = 0;

            // Boundaries with high restitution for bouncing
            const walls = [
                Bodies.rectangle(width / 2, -50, width, 100, { isStatic: true, restitution: 1 }),
                Bodies.rectangle(width / 2, height + 50, width, 100, { isStatic: true, restitution: 1 }),
                Bodies.rectangle(width + 50, height / 2, 100, height, { isStatic: true, restitution: 1 }),
                Bodies.rectangle(-50, height / 2, 100, height, { isStatic: true, restitution: 1 }),
            ];
            World.add(engine.world, walls);

            const allBodies: Matter.Body[] = [];

            // Products
            PRODUCTS.forEach((product, idx) => {
                const body = Bodies.circle(
                    (idx + 1) * (width / (PRODUCTS.length + 1)),
                    height / 2,
                    85,
                    {
                        frictionAir: 0.015,
                        restitution: 0.9,
                        label: `product:${product.id}`,
                        density: 0.001
                    }
                );
                Matter.Body.setVelocity(body, {
                    x: (Math.random() - 0.5) * 6,
                    y: (Math.random() - 0.5) * 6
                });
                allBodies.push(body);
            });

            // Health Tips
            HEALTH_TIPS.forEach((tip) => {
                const body = Bodies.circle(
                    Math.random() * width,
                    Math.random() * height,
                    65,
                    {
                        frictionAir: 0.03,
                        restitution: 0.7,
                        label: `tip:${tip}`,
                        density: 0.0005
                    }
                );
                Matter.Body.setVelocity(body, {
                    x: (Math.random() - 0.5) * 3,
                    y: (Math.random() - 0.5) * 3
                });
                allBodies.push(body);
            });

            World.add(engine.world, allBodies);

            const mouse = Mouse.create(containerRef.current);
            const mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: { stiffness: 0.2, render: { visible: false } }
            });

            // Disable scroll capture
            (mouse as any).mousewheel = null;

            World.add(engine.world, mouseConstraint);

            const animate = () => {
                Engine.update(engine, 1000 / 60);

                // Keep bodies within bounds in case of high speed escape
                allBodies.forEach(b => {
                    if (b.position.x < -100 || b.position.x > width + 100 || b.position.y < -100 || b.position.y > height + 100) {
                        Matter.Body.setPosition(b, { x: width / 2, y: height / 2 });
                    }
                });

                const updatedPositions = allBodies.map(b => {
                    const [type, label] = b.label.split(':');
                    return {
                        id: b.id,
                        type: type as 'product' | 'tip',
                        label: label,
                        x: b.position.x,
                        y: b.position.y,
                        angle: b.angle
                    };
                });
                setBodies(updatedPositions);

                requestRef.current = requestAnimationFrame(animate);
            };

            animate();
        }, 100);

        return () => {
            clearTimeout(initTimer);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            if (engineRef.current) Matter.Engine.clear(engineRef.current);
        };
    }, [isMobile, mounted]);

    if (!mounted) return <div className="physics-container" />;

    if (isMobile) {
        return (
            <section className="section-padding bg-bg-alt">
                <div className="container">
                    <div className="text-center mb-4">
                        <span className="text-xs text-secondary">Our Products</span>
                        <h2 className="mt-2 mb-4">Fresh & Pure Oils</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                        {PRODUCTS.map(product => (
                            <div
                                key={product.id}
                                onClick={() => onProductSelect(product)}
                                className="card"
                                style={{ textAlign: 'center', cursor: 'pointer' }}
                            >
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 text-white" style={{ background: 'var(--color-primary)', width: '64px', height: '64px' }}>
                                    <product.icon size={32} />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{product.name}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{product.shortDesc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <div className="physics-container" ref={containerRef}>
            <div className="physics-overlay text-center px-4">
                <span className="text-xs text-secondary">Interactive Discovery</span>
                <h2 className="mt-2 mb-4">Grown with Care, Pressed with Love</h2>
                <div className="flex items-center justify-center gap-2 text-text-muted font-bold text-sm bg-white/90 backdrop-blur-sm rounded-full w-fit mx-auto px-6 py-2 shadow-sm border border-bg-alt">
                    <ArrowDown size={14} className="animate-bounce" /> Drag bubbles to explore our oils and health insights
                </div>
            </div>

            {bodies.map((body) => {
                if (body.type === 'product') {
                    const product = PRODUCTS.find(p => p.id === body.label);
                    if (!product) return null;
                    return (
                        <div
                            key={body.id}
                            onClick={() => onProductSelect(product)}
                            className="absolute bubble transition-transform hover:scale-110 active:scale-95"
                            style={{
                                transform: `translate(${body.x - 85}px, ${body.y - 85}px) rotate(${body.angle}rad)`,
                                width: '170px',
                                height: '170px',
                                borderRadius: '50%',
                                backgroundColor: 'white',
                                cursor: 'pointer',
                                zIndex: 15,
                            }}
                        >
                            <div className="p-3 rounded-full mb-1 bg-bg-alt text-primary">
                                <product.icon size={32} />
                            </div>
                            <span className="font-bold text-primary text-sm">{product.name}</span>
                            <span className="text-[10px] text-secondary font-extrabold uppercase mt-1">View Info</span>
                        </div>
                    );
                } else {
                    return (
                        <div
                            key={body.id}
                            className="absolute bubble bg-primary text-white p-6 leading-tight italic text-sm"
                            style={{
                                transform: `translate(${body.x - 65}px, ${body.y - 65}px) rotate(${body.angle}rad)`,
                                width: '130px',
                                height: '130px',
                                borderRadius: '50%',
                                zIndex: 14,
                                textAlign: 'center',
                            }}
                        >
                            {body.label}
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default AntiGravityZone;
