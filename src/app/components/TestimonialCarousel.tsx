"use client";
import React, { useState } from "react";
import testimonialData from "./testimonialData";
import "../styles/TestimonialSection.css";


const TestimonialCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
    };

    const prev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonialData.length - 1 : prev - 1
        );
    };

    const { image, quote, name, role } = testimonialData[currentIndex];

    return (
        <div className="testimonial-container">
            <div className="testimonial-box">
                <p className="quote">“{quote}”</p>
                <div className="author-info">
                    <img src={image} alt={name} className="author-img" />
                    <div className="author-text">
                        <p className="name">{name}</p>
                        <p className="role">{role}</p>
                    </div>
                </div>
            </div>

            <div className="buttons">
                <button onClick={prev}>&larr;</button>
                <button onClick={next}>&rarr;</button>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
