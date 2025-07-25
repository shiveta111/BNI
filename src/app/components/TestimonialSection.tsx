'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import testimonialData from './testimonialData';
import '../styles/TestimonialSection.css';

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [scrollPhase, setScrollPhase] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const sectionElement = document.querySelector('.testimonial-wrapper') as HTMLElement;

            if (sectionElement) {
                const rect = sectionElement.getBoundingClientRect();
                const sectionTop = scrollY + rect.top;
                const sectionHeight = sectionElement.offsetHeight;

                if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
                    const relativeScroll = scrollY - sectionTop;
                    const scrollPercentage = relativeScroll / sectionHeight;

                    const newIndex = Math.floor(scrollPercentage * testimonialData.length);
                    const clampedIndex = Math.min(Math.max(newIndex, 0), testimonialData.length - 1);
                    setCurrentIndex(clampedIndex);

                    const totalPhases = 4;
                    const phaseProgress = scrollPercentage * totalPhases;
                    const currentPhase = Math.floor(phaseProgress);
                    const clampedPhase = Math.min(Math.max(currentPhase, 0), totalPhases - 1);
                    setScrollPhase(clampedPhase);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const currentItem = testimonialData[currentIndex];

    return (
        <section className="testimonial-wrapper">
            <div className="testimonial-content">
                <div className={`text-area scroll-phase-${scrollPhase}`}>
                    <p className="highlight">{currentItem.highlight}</p>
                    <h1>{currentItem.heading}</h1>
                    <h1>{currentItem.subheading}</h1>
                    <p className="description">{currentItem.description}</p>
                </div>

                <div className={`testimonial-card scroll-phase-${scrollPhase}`}>
                    <div className="quote-section">
                        <p className="quote">"{currentItem.message}"</p>
                    </div>
                    <div className="user-info">
                        <Image
                            src={currentItem.image}
                            alt={currentItem.name}
                            width={80}
                            height={80}
                            className="user-image"
                        />
                        <div className="user-details">
                            <p className="name">{currentItem.name}</p>
                            <p className="role">{currentItem.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
