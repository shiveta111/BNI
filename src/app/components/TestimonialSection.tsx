'use client';

import React, { useState, useEffect } from 'react';
import '../styles/TestimonialSection.css';

const testimonials = [
    {
        heading: 'Grow Your Business',
        highlight: 'Scale Up',
        subheading: 'Exponentially',
        description:
            'Our global presence together with a proven networking system results in unmatched business opportunities. Exchange qualified referrals and watch your business grow.',
        message:
            'I’ve achieved a great ROI with $736,000 in referrals and $110,000 in return.',
        image: '/assets/Paul-Tommey.png',
        name: 'Paul Tommey',
        title: 'Realtor-Property Manager | USA',
    },
    {
        heading: 'Become a Master',
        highlight: 'Lifelong Learning',
        subheading: 'Connector',
        description:
            'Grow to the Master Connector level, where you actively help your BNI Chapter to thrive and increase revenue for each Member.',
        message:
            'I used to struggle to get trusted logistic partners in other countries. Since I joined BNI, I get credible and trusted partners in just an hour after asking.',
        image: '/assets/ernest.png',
        name: 'Ernest Buabeng',
        title: 'Clearing & Forwarding | Ghana',
    },
    {
        heading: 'Build Your Professional',
        highlight: 'Beyond Networking',
        subheading: 'Network',
        description:
            'Build a trusted network of like-minded professionals who not only care about your success but are eager to help you achieve it.',
        message:
            'BNI has been a game-changer, expanding my network with like-minded professionals.',
        image: '/assets/Crystal-Garcia.png',
        name: 'Crystal Garcia',
        title: 'Business Development, USA',
    },
];

const TestimonialSection = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const {
        heading,
        highlight,
        subheading,
        description,
        message,
        image,
        name,
        title,
    } = testimonials[index];

    return (
        <section className="testimonial-section">
            <div className="overlay">
                <div className="text-content">
                    <p className="highlight">{highlight}</p>
                    <h1>{heading}</h1>
                    <h1>{subheading}</h1>
                    <p className="description">{description}</p>
                </div>

                <div className="testimonial-box">
                    <p className="quote">{message}</p>
                    <div className="testimonial-user">
                        <img src={image} alt={name} />
                        <div>
                            <p className="name">{name}</p>
                            <p className="title">{title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
