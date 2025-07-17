'use client';
import React from 'react';
import '../styles/ThreeStepsSection.css';

const ThreeStepsSection = () => {
    const backgroundImage = '/assets/global-map.jpg';

    const testimonials = [
        {
            text: 'BNI has shown me how to raise the bar and rewrite my business blueprint.',
            name: 'Farzana Suri',
            title: 'Coaching, India',
            image: '/assets/Farzana-Suri.png',
        },
        {
            text: 'Over 86% of my clients come through referrals from BNI Members.',
            name: 'Jennie B',
            title: 'Sales, United States',
            image: '/assets/Jennie-Bellinger.png',
        },
        {
            text: 'Today we own a Pvt. Ltd. Firm that has achieved Rs 1.5 Cr in business within 9 months, with 95% of it coming from BNI.',
            name: 'Bhavesh Vora',
            title: 'Engineering Solutions, India',
            image: '/assets/Bhavesh-Vora.png',
        },
        {
            text: 'Friendships, connection & likeminded people make the added bonus of increased business & income worthwhile.',
            name: 'Matthew S',
            title: 'Real Estate, Australia',
            image: '/assets/Matthew-Stevens.png',
        },
        {
            text: 'BNI expanded my business network and improved communication, boosting credibility and service.',
            name: 'Jackson Kikonyogo',
            title: 'Events, Uganda',
            image: '/assets/Jackson-Kikonyogo.png',
        },
        {
            text: 'There is no strategy that benefits so many areas in one&apos;s life than BNI!',
            name: 'Dr. Adriana Cortés',
            title: 'Health & Wellness, Colombia',
            image: '/assets/Dr-Adriana-Cortes.png',
        },
        {
            text: 'I&apos;ve shifted my business to one developed via referrals with zero competition.',
            name: 'Kent Raymer',
            title: 'Construction, United States',
            image: '/assets/Kent-Raymer.png',
        },
        {
            text: 'BNI has been a fundamental networking tool for my and my company&apos;s growth.',
            name: 'Rafael Lins',
            title: 'Pest Control, Brazil',
            image: '/assets/Rafael-Lins.png',
        }
    ];

    const half = Math.ceil(testimonials.length / 2);
    const firstRow = testimonials.slice(0, half);
    const secondRow = testimonials.slice(half);

    return (
        <div className="three-steps-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h2 className="section-title">3 Steps to Success</h2>
            <p className="section-subtitle">
                Get invited to a BNI networking meeting and witness the power of referrals in action.
            </p>

            <div className="steps-combined">
                <div className="step-block">
                    <div className="step-number"><span>1</span></div>
                    <h4>Visit a BNI chapter</h4>
                    <p>and experience the power of the BNI network</p>
                </div>
                <div className="step-block">
                    <div className="step-number"><span>2</span></div>
                    <h4>Meet the Members</h4>
                    <p>and learn how they can help you grow your business</p>
                </div>
                <div className="step-block">
                    <div className="step-number"><span>3</span></div>
                    <h4>Apply</h4>
                    <p>to become a Member of a BNI Chapter</p>
                </div>
            </div>

            <button className="get-invited-btn">GET INVITED</button>

            <div className="carousel-row left-to-right">
                <div className="carousel-track">
                    {[...firstRow, ...firstRow].map((t, idx) => (
                        <div className="testimonial-card solid-dark" key={idx}>
                            <p className="testimonial-text">{t.text}</p>
                            <div className="testimonial-info">
                                <img src={t.image} alt={t.name} />
                                <div>
                                    <strong>{t.name}</strong>
                                    <p>{t.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="carousel-row right-to-left">
                <div className="carousel-track">
                    {[...secondRow, ...secondRow].map((t, idx) => (
                        <div className="testimonial-card solid-dark" key={idx}>
                            <p className="testimonial-text">{t.text}</p>
                            <div className="testimonial-info">
                                <img src={t.image} alt={t.name} />
                                <div>
                                    <strong>{t.name}</strong>
                                    <p>{t.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <p className="disclaimer">
                *Disclaimer: This information is based on historical BNI Member self-reported data as of August 5, 2024, and represents collective results from BNI Members worldwide over the last 12 months. Errors in self-reporting of data or in subsequent analysis are possible. Therefore, the information herein should only be viewed as representative in nature.
            </p>
        </div>
    );
};

export default ThreeStepsSection;
