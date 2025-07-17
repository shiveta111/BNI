'use client';
import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
    return (
        <section className="bni-hero-wrapper">
            <div className="bni-hero-card">
                <video
                    className="bni-hero-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/assets/hero-video.mp4" type="video/mp4" />
                </video>

                <a
                    href="https://www.bni.com/find-a-chapter/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bni-hero-btn"
                >
                    GET INVITED
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
